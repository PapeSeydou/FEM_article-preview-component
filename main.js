addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.getElementsByClassName('share-button');
    const shareButtonsArray = Array.from(shareButtons);

    shareButtonsArray.forEach(shareButton =>{
        shareButton.addEventListener('click', (e) => {
            console.log('Share Button Clicked!');

            const parentCard = e.target.closest('.card');
            const shareToast = parentCard.querySelector('.share-toast');

            shareToast.classList.toggle('hidden');

        })
    });
})