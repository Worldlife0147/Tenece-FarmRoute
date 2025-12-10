const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const regionToggle = document.getElementById('regionToggle');
const dropdown = document.getElementById('dropdown');
const viewBtn = document.getElementById('viewBtn');

let selectedRegion = '';

overlay.addEventListener('click', closeAll);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeAll(); });

regionToggle.addEventListener('click', toggleDropdown);
regionToggle.addEventListener('keydown', (e)=>{
  if(e.key==='Enter' || e.key===' '){
    e.preventDefault();
    toggleDropdown();
  }
});

dropdown.addEventListener('click', (e)=>{
  const btn = e.target.closest('.drop-item');
  if(!btn) return;
  selectedRegion = btn.dataset.value;
  regionToggle.querySelector('.select-label').textContent = btn.textContent;
  dropdown.classList.add('hidden');
  regionToggle.setAttribute('aria-expanded','false');
});

viewBtn.addEventListener('click', ()=>{
  if(!selectedRegion){
    regionToggle.classList.add('shake');
    setTimeout(()=> regionToggle.classList.remove('shake'),260);
    alert('Please choose a region.');
    return;
  }
  
  alert(`Region selected: ${selectedRegion}`);
});

function toggleDropdown(){
  dropdown.classList.toggle('hidden');
  const isOpen = !dropdown.classList.contains('hidden');
  regionToggle.setAttribute('aria-expanded', isOpen);
}

function closeAll(){
  overlay.style.display='none';
  modal.style.display='none';
  dropdown.classList.add('hidden');
}
