
(function(n_children, p_name, g_location, j_title) {

    const fortune = `You will be a ${j_title} in ${g_location}, and married to ${p_name} with ${n_children} kids.`;
    
    const paragraph = document.createElement('p');
    
    paragraph.textContent = fortune;
    
    document.body.appendChild(paragraph);

})(4, 'piira', 'casa', 'frontend');