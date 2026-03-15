import { COLOR_PALETTE, DICE_FACE_OPTIONS, FLASH, TRAY_SCALE } from './config.js';

export function createUIController({
  onDiceConfigurationChanged,
  onDiceCountChanged,
  onRequestRoll,
} = {}) {
  const diceCountSelect = document.querySelector('#dice-count');
  const diceConfigs = document.querySelector('#dice-configs');
  const setAllD6Btn = document.querySelector('#set-all-d6');
  const setAllD8Btn = document.querySelector('#set-all-d8');
  const setAllD12Btn = document.querySelector('#set-all-d12');
  const setAllD20Btn = document.querySelector('#set-all-d20');
  const canvasContainer = document.querySelector('#canvas-container');
  const sidePanel = document.querySelector('.side-panel');

  let dieColors = [];
  let popupTimer = null;
  let relandFlashTimer = null;
  let activeColorPicker = null;

  const panelToggleBtn = document.createElement('button');
  panelToggleBtn.type = 'button';
  panelToggleBtn.className = 'canvas-overlay-btn canvas-menu-btn';
  panelToggleBtn.textContent = '☰';
  panelToggleBtn.setAttribute('aria-label', 'Toggle settings panel');
  panelToggleBtn.setAttribute('aria-expanded', 'true');

  const fullscreenBtn = document.createElement('button');
  fullscreenBtn.type = 'button';
  fullscreenBtn.className = 'canvas-overlay-btn canvas-fs-btn';
  fullscreenBtn.textContent = 'Fullscreen';

  const canvasResultPopup = document.createElement('div');
  canvasResultPopup.className = 'canvas-result-popup';

  const totalFlashPopup = document.createElement('div');
  totalFlashPopup.className = 'canvas-total-flash';

  const relandFlashPopup = document.createElement('div');
  relandFlashPopup.className = 'canvas-reroll-flash';
  relandFlashPopup.textContent = 'Re-roll';

  const colorPickerDialog = document.createElement('dialog');
  colorPickerDialog.className = 'color-picker-dialog';
  colorPickerDialog.innerHTML = `
    <div class="color-picker-shell">
      <div class="color-picker-title">Choose Color</div>
      <div class="color-picker-palette" role="radiogroup" aria-label="Color palette"></div>
      <button type="button" class="color-picker-close">Close</button>
    </div>
  `;
  document.body.appendChild(colorPickerDialog);

  const colorPickerPalette = colorPickerDialog.querySelector('.color-picker-palette');
  const colorPickerCloseBtn = colorPickerDialog.querySelector('.color-picker-close');

  function updateColorTriggerButton(button, hex) {
    button.style.backgroundColor = hex;
  }

  function setPickerActiveSwatch(hex) {
    colorPickerPalette.querySelectorAll('button[data-color]').forEach((swatch) => {
      const isActive = swatch.dataset.color === hex;
      swatch.classList.toggle('is-active', isActive);
      swatch.setAttribute('aria-checked', isActive ? 'true' : 'false');
    });
  }

  function closeColorPicker() {
    if (colorPickerDialog.open) {
      colorPickerDialog.close();
    }
    activeColorPicker = null;
  }

  function openColorPickerFor(index, triggerButton) {
    activeColorPicker = { index, triggerButton };
    setPickerActiveSwatch(dieColors[index]);
    if (!colorPickerDialog.open) {
      colorPickerDialog.showModal();
    }
  }

  function notifyDiceConfigurationChanged() {
    if (typeof onDiceConfigurationChanged === 'function') {
      onDiceConfigurationChanged();
    }
  }

  function isCanvasFullscreen() {
    return document.fullscreenElement === canvasContainer;
  }

  function setPanelHidden(hidden) {
    document.body.classList.toggle('panel-hidden', hidden);
    panelToggleBtn.setAttribute('aria-expanded', String(!hidden));
    panelToggleBtn.textContent = hidden ? '☰' : '☰ Close';
    panelToggleBtn.setAttribute('aria-label', hidden ? 'Open settings panel' : 'Close settings panel');
  }

  function setRollInteractionDisabled(disabled) {
    canvasContainer.classList.toggle('roll-disabled', disabled);
  }

  function clearRelandFlash() {
    if (relandFlashTimer) {
      clearTimeout(relandFlashTimer);
      relandFlashTimer = null;
    }
    relandFlashPopup.classList.remove('show');
  }

  function hideCanvasResultPopup() {
    if (popupTimer) {
      clearTimeout(popupTimer);
      popupTimer = null;
    }
    totalFlashPopup.classList.remove('show');
    canvasResultPopup.classList.remove('show');
    canvasResultPopup.innerHTML = '';
  }

  function triggerTotalFlash(total) {
    totalFlashPopup.textContent = `Total: ${total}`;
    totalFlashPopup.classList.remove('show');
    void totalFlashPopup.offsetWidth;
    totalFlashPopup.classList.add('show');
  }

  function triggerRelandFlash() {
    clearRelandFlash();
    void relandFlashPopup.offsetWidth;
    relandFlashPopup.classList.add('show');

    relandFlashTimer = setTimeout(() => {
      relandFlashPopup.classList.remove('show');
      relandFlashTimer = null;
    }, FLASH.relandDurationMs);
  }

  function showCanvasResultPopup(total, values) {
    const lines = values
      .map((entry) => `<div class="canvas-result-line">${entry}</div>`)
      .join('');

    canvasResultPopup.innerHTML = `<div class="canvas-result-total">Total: ${total}</div>${lines}`;
    canvasResultPopup.classList.add('show');
    triggerTotalFlash(total);
  }

  function shuffledColorsForCount(count) {
    const colors = [];
    while (colors.length < count) {
      const pool = [...COLOR_PALETTE];
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }
      colors.push(...pool);
    }
    return colors.slice(0, count);
  }

  function getSelectedDiceSides() {
    return Array.from(document.querySelectorAll('select[data-die-type="true"]'))
      .map((element) => Number(element.value));
  }

  function getDiceCount() {
    return Number(diceCountSelect.value);
  }

  function renderDiceSelectors() {
    const count = getDiceCount();
    dieColors = shuffledColorsForCount(count);
    diceConfigs.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'die-config';

      const label = document.createElement('label');
      label.setAttribute('for', `die-type-${i}`);
      label.textContent = `Die ${i + 1}`;

      const select = document.createElement('select');
      select.id = `die-type-${i}`;
      select.dataset.dieType = 'true';
      select.className = 'die-type-select';

      DICE_FACE_OPTIONS.forEach((faces) => {
        const option = document.createElement('option');
        option.value = String(faces);
        option.textContent = `D${faces}`;
        if (faces === 6) option.selected = true;
        select.appendChild(option);
      });

      const colorButton = document.createElement('button');
      colorButton.type = 'button';
      colorButton.id = `die-color-${i}`;
      colorButton.dataset.dieColor = 'true';
      colorButton.className = 'die-color-trigger';
      colorButton.setAttribute('aria-label', `Choose color for Die ${i + 1}`);
      updateColorTriggerButton(colorButton, dieColors[i]);
      colorButton.addEventListener('click', () => {
        openColorPickerFor(i, colorButton);
      });

      const controls = document.createElement('div');
      controls.className = 'die-controls';
      controls.append(select, colorButton);

      wrapper.append(label, controls);
      diceConfigs.appendChild(wrapper);
    }
  }

  function setAllDiceTypes(value) {
    document.querySelectorAll('select[data-die-type="true"]').forEach((select) => {
      select.value = String(value);
    });
  }

  function handleDiceCountChange() {
    notifyDiceConfigurationChanged();
    renderDiceSelectors();
    if (typeof onDiceCountChanged === 'function') {
      onDiceCountChanged(getDiceCount());
    }
  }

  function handleRequestRoll(options = { forceRestart: true }) {
    if (typeof onRequestRoll === 'function') {
      onRequestRoll(options);
    }
  }

  COLOR_PALETTE.forEach((hex) => {
    const swatch = document.createElement('button');
    swatch.type = 'button';
    swatch.className = 'color-picker-swatch';
    swatch.dataset.color = hex;
    swatch.style.backgroundColor = hex;
    swatch.setAttribute('role', 'radio');
    swatch.setAttribute('aria-label', `Choose ${hex.toUpperCase()}`);
    swatch.setAttribute('aria-checked', 'false');

    swatch.addEventListener('click', () => {
      if (!activeColorPicker) return;
      const { index, triggerButton } = activeColorPicker;
      if (dieColors[index] !== hex) {
        dieColors[index] = hex;
        updateColorTriggerButton(triggerButton, hex);
        notifyDiceConfigurationChanged();
      }
      closeColorPicker();
    });

    colorPickerPalette.appendChild(swatch);
  });

  colorPickerCloseBtn.addEventListener('click', closeColorPicker);
  colorPickerDialog.addEventListener('cancel', () => {
    activeColorPicker = null;
  });
  colorPickerDialog.addEventListener('close', () => {
    activeColorPicker = null;
  });

  setAllD6Btn.addEventListener('click', () => {
    setAllDiceTypes(6);
    notifyDiceConfigurationChanged();
  });
  setAllD8Btn.addEventListener('click', () => {
    setAllDiceTypes(8);
    notifyDiceConfigurationChanged();
  });
  setAllD12Btn.addEventListener('click', () => {
    setAllDiceTypes(12);
    notifyDiceConfigurationChanged();
  });
  setAllD20Btn.addEventListener('click', () => {
    setAllDiceTypes(20);
    notifyDiceConfigurationChanged();
  });

  diceConfigs.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) return;
    if (target.dataset.dieType === 'true') {
      notifyDiceConfigurationChanged();
    }
  });

  fullscreenBtn.addEventListener('click', async () => {
    try {
      if (isCanvasFullscreen()) {
        await document.exitFullscreen();
      } else {
        await canvasContainer.requestFullscreen();
      }
    } catch {
    }
  });

  canvasContainer.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (target.closest('.canvas-overlay-btn') || target.closest('.canvas-result-popup') || target.closest('.side-panel')) return;
    handleRequestRoll({ forceRestart: true });
  });

  document.addEventListener('fullscreenchange', () => {
    const active = isCanvasFullscreen();
    canvasContainer.classList.toggle('is-fullscreen', active);
    fullscreenBtn.textContent = active ? 'Exit Fullscreen' : 'Fullscreen';
    if (!active) {
      hideCanvasResultPopup();
    }
  });

  panelToggleBtn.addEventListener('click', () => {
    const hidden = !document.body.classList.contains('panel-hidden');
    setPanelHidden(hidden);
  });

  diceCountSelect.addEventListener('change', handleDiceCountChange);

  window.addEventListener('keydown', (event) => {
    const isSpaceKey = event.code === 'Space' || event.key === ' ' || event.key === 'Spacebar';
    if (!isSpaceKey || event.repeat) return;

    const active = document.activeElement;
    const tag = active?.tagName;
    const inFormControl = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
    if (inFormControl) return;

    event.preventDefault();
    handleRequestRoll({ forceRestart: true });
  });

  if (sidePanel) {
    canvasContainer.append(sidePanel);
  }
  canvasContainer.append(panelToggleBtn, fullscreenBtn, canvasResultPopup);
  canvasContainer.append(relandFlashPopup, totalFlashPopup);

  function initialize() {
    for (let i = TRAY_SCALE.minDice; i <= TRAY_SCALE.maxDice; i++) {
      const option = document.createElement('option');
      option.value = String(i);
      option.textContent = String(i);
      if (i === 2) option.selected = true;
      diceCountSelect.appendChild(option);
    }

    renderDiceSelectors();
    setPanelHidden(document.body.classList.contains('panel-hidden'));
    if (typeof onDiceCountChanged === 'function') {
      onDiceCountChanged(getDiceCount());
    }
  }

  return {
    canvasContainer,
    initialize,
    clearRelandFlash,
    hideCanvasResultPopup,
    showCanvasResultPopup,
    triggerRelandFlash,
    setRollInteractionDisabled,
    getSelectedDiceSides,
    getDieColors: () => [...dieColors],
    getDiceCount,
    hasVisibleResultPopup: () => canvasResultPopup.classList.contains('show'),
  };
}