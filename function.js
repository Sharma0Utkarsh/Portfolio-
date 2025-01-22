function downloadResume() {
    const a = document.createElement('a');
    a.href = '"E:\CODEING\Web Development\Portfolio\Utkarsh Resume.pdf"'; 
    a.download = 'Utkarsh-Sharma-Resume.pdf'; 
    a.click();
    document.body.removeChild(a);
}
