// Example: simple alert or form handler
console.log("DoorWorks site loaded successfully!");

<script>
// Show popup after 1 second
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("offerPopup").style.display = "flex";
    }, 1000);
});

// Close button
document.getElementById("closePopup").addEventListener("click", () => {
    document.getElementById("offerPopup").style.display = "none";
});
</script>


