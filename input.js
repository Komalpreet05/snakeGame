let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: -1 }
            break;
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            break;
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 }
            break;
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 }
            break;
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection;
}

// // Your existing code for handling keyboard input
// document.addEventListener('keydown', handleKeydown);

// // New code for handling touch input
// let touchStartX, touchStartY;
// document.addEventListener('touchstart', handleTouchStart);
// document.addEventListener('touchmove', handleTouchMove);

// function handleKeydown(event) {
//   // Your existing keyboard input handling logic
//   // ...
// }

// function handleTouchStart(event) {
//   // Store the initial touch coordinates
//   touchStartX = event.touches[0].clientX;
//   touchStartY = event.touches[0].clientY;
// }

// function handleTouchMove(event) {
//   if (!touchStartX || !touchStartY) {
//     return;
//   }

//   // Calculate the change in coordinates
//   const touchEndX = event.touches[0].clientX;
//   const touchEndY = event.touches[0].clientY;

//   const deltaX = touchEndX - touchStartX;
//   const deltaY = touchEndY - touchStartY;

//   // Determine the direction based on the change in coordinates
//   if (Math.abs(deltaX) > Math.abs(deltaY)) {
//     // Horizontal swipe
//     if (deltaX > 0) {
//       // Swipe right
//       handleSwipeRight();
//     } else {
//       // Swipe left
//       handleSwipeLeft();
//     }
//   } else {
//     // Vertical swipe
//     if (deltaY > 0) {
//       // Swipe down
//       handleSwipeDown();
//     } else {
//       // Swipe up
//       handleSwipeUp();
//     }
//   }

//   // Reset the initial touch coordinates
//   touchStartX = null;
//   touchStartY = null;
// }

// function handleSwipeRight() {
//   // Handle right swipe
//   // ...
// }

// function handleSwipeLeft() {
//   // Handle left swipe
//   // ...
// }

// function handleSwipeDown() {
//   // Handle down swipe
//   // ...
// }

// function handleSwipeUp() {
//   // Handle up swipe
//   // ...
// }
