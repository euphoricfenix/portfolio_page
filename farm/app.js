document.querySelectorAll('.more-btn').forEach(btn => {
    const dlg = document.getElementById(btn.dataset.modal);
    if (!dlg) return;

    btn.addEventListener('click', () => dlg.showModal());
    dlg.querySelector('.sheet-close').addEventListener('click', () => dlg.close());

    // a click that lands on the dialog itself, not its panel, is the backdrop
    dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });
});
