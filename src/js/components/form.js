import IMask from 'imask';

let telInput = document.querySelector('#tel');
if (telInput) {
    IMask(telInput, {
        mask: '+{7} (000) 000-00-00',
    });
}