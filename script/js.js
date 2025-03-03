let bg1 = document.getElementById('bg1')
let bg2 = document.getElementById('bg2')
let bg3 = document.getElementById('bg3')
let bg4 = document.getElementById('bg4')

let hoverTimeout;

bg1.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        let realEstateText = "AZKOE Real Estate Services";
        let realEstateElement = document.getElementById('text-services');
        
        realEstateElement.innerHTML = realEstateText;
    }, 500);
});

bg1.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
    
    let realEstateElement = document.getElementById('text-services');
    realEstateElement.innerHTML = '';
});

bg2.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        let oilAndGasText = "AZKOE Oil and Gas Services";
        let oilAndGasElement = document.getElementById('text-services1');
        
        oilAndGasElement.innerHTML = oilAndGasText;
    }, 500);
});

bg2.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
    
    let oilAndGasElement = document.getElementById('text-services1');
    oilAndGasElement.innerHTML = '';
});

bg3.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        let hotelText = 'we provide "hotel support services"';
        let hotelElement = document.getElementById('text-services2');
        
        hotelElement.innerHTML = hotelText;
    }, 500);
});

bg3.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
    
    let hotelElement = document.getElementById('text-services2');
    hotelElement.innerHTML = '';
});

bg4.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        let householdText = 'delivering quality household products';
        let householdElement = document.getElementById('text-services3');
        
        householdElement.innerHTML = householdText;
    }, 500);
});

bg4.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
    
    let householdElement = document.getElementById('text-services3');
    householdElement.innerHTML = '';
});

bg5.addEventListener('mouseover', function() {
    hoverTimeout = setTimeout(function() {
        let truckText = 'petrolium products identations';
        let truckElement = document.getElementById('text-services4');
        
        truckElement.innerHTML = truckText;
    }, 500);
});

bg5.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
    
    let truckElement = document.getElementById('text-services4');
    truckElement.innerHTML = '';
});

