let $tDocument = $(document);
let $EClick = 'click';
let proGBar = '5%';
let unvalidBorderColor = 'rgb(255, 75, 75)';

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
 var s3 = getUrlParameter('s3');

$(function() {

    "use strict";

    $('.ui-slider-handle').draggable();

    // Life
    $('#sliderLife1').slider({
        value: 150000,
        min: 5000,
        max: 1000000,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { 
            $('#amountLife1').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $('#page4 .yourCoverForLife').html(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
        }
    });
    $('#amountLife1').val(('£' + $('#sliderLife1').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $('#page4  .yourCoverForLife').html(('£' + $('#sliderLife1').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    $('#sliderLife2').slider({
        value: 25,
        min: 5,
        max: 50,
        step: 1,
        range: 'min',
        slide: function(event, ui) { $('#amountLife2').val((ui.value + ' ' + 'years').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); }
    });
    $('#amountLife2').val(($('#sliderLife2').slider('value') + '' + 'years').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    $('#sliderLife3').slider({
        value: 3000,
        min: 0,
        max: 20000,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { 
            $('#amountLife3').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $('.yourCoverFor').html(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
        }
    });
    $('#amountLife3').val(('£' + $('#sliderLife3').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $('.yourCoverFor').html(('£' + $('#sliderLife3').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    $('#sliderLife1Over').slider({
        value: 3000,
        min: 3,
        max: 25000,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { 
            $('#amountLife1Over').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $("#amountLife1Over").val(function() { return $(this).val().replace("003", "000"); });
            $("#amountLife1Over").val(function() { return $(this).val().replace("£3", "£3,000"); });
        }
    });
    $('#amountLife1Over').val(('£' + $('#sliderLife1Over').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $("#amountLife1Over").val(function() { return $(this).val().replace("003", "000"); });
    
    // Income
    $('#slideroverIncome1').slider({
        value: 3750,
        min: 100,
        max: 9500,
        step: 50,
        range: 'min',
        slide: function(event, ui) { 
            $('#coverIncome1').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $('#page4In .yourCoverFor').html(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
        }
    });
    $('#coverIncome1').val(('£' + $('#slideroverIncome1').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $('#page4In .yourCoverFor').html(('£' + $('#slideroverIncome1').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    $('#slideroverIncome2').slider({
        value: 26,
        min: 1,
        max: 40,
        step: 1,
        range: 'min',
        slide: function(event, ui) { $('#coverIncome2').val((ui.value + ' ' + 'years').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); }
    });
    $('#coverIncome2').val(($('#slideroverIncome2').slider('value') + ' ' + 'years').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    
    // Mortgage
    let prop1id = '#EstimatedProp1';
    let prop2id = '#EstimatedProp2';
    let ValSet = '2,999,000';
    let ValToRep = '3,000,000';
    var test;
    var tes;
    
    $('#sliderEstimatedProp1').slider({
        value: 50000,
        min: 50000,
        max: 3000000,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { 
            $(prop1id).val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
            $(prop1id).each(function() {
               $(this).val(function() { return $(this).val().replace(ValSet, ValToRep) });
               
            });
           // $('#EstimatedProp2').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));

        }
    });
    $(prop1id).val(('£' + $('#sliderEstimatedProp1').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    
    // Start Equity Scout
    $('#HomeVal').slider({
        value: 75000,
        min: 70000,
        max: 2000000,
        step: 10000,
        range: 'min',
        slide: function(event, ui) { 
            $('#amountVal').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $('#amountVal').val(function() { return $(this).val().replace('£2,000,000', '£2,000,000+') });
        }
    });
    $('#amountVal').val(('£' + $('#HomeVal').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));

    $('#MortgageVal').slider({
        value: 0,
        min: 0,
        max: 1000000,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { $('#balanceVal').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); }
    });
    $('#balanceVal').val(('£' + $('#MortgageVal').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    // End Equity Scout
    
    var part1 = $(prop1id).val();
    $($('#page2Mh')).on('mouseup' , function(){
            tes = $(prop1id).val();
            tes = tes.replace(/,/g, '');
            tes = tes.replace('£' , '');
            $('#tempNum').val(tes);
        console.log($('#tempNum').val());

        test = $('#tempNum').val();
        test = parseInt(test);
        test = (90 / 100) * test;

    $('#sliderEstimatedProp2').slider({
        value: 100000,
        min: 50000,
        max: test,
        step: 5000,
        range: 'min',
        slide: function(event, ui) { 
            $(prop2id).val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
            $(prop2id).each(function() {
                $(this).val(function() { return $(this).val().replace(ValSet, ValToRep) });
            });
        }
    });
    $(prop2id).val(('£' + $('#sliderEstimatedProp2').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $(prop2id).val(function() { return $(this).val().replace('101,000', '100,000') });
    
    });
    
    // ISA Smart Slider
    $('#IsaSmartSlider').slider({
        value: 4000,
        min: 4000,
        max: 20000,
        step: 1000,
        range: 'min',
        slide: function(event, ui) { 
            $('#IsaSmart').val(('£' + ui.value).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')); 
            $('#IsaSmart').val(function() { return $(this).val().replace('£20,000', '£20,000 +').replace('£4,000', '£0') });

            $('#IsaSmart').each(function() {
                
                const negVal = $(this).val() != '£0' ? $('.page2IS').removeClass('stopBtn') : $('.page2IS').addClass('stopBtn');
            });
        }
    });
    $('#IsaSmart').val(('£' + $('#IsaSmartSlider').slider('value')).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'));
    $('#IsaSmart').val(function() { return $(this).val().replace('£4,000', '£0') });


    let clearThis = '<div style="clear: both"></div>';
    let clearThInput;
    clearThInput = clearThis;
    $(clearThis).appendTo('.formpage, #row1');

    $('#lastname').after(clearThInput);

    let formStepModal = $('<div/>').addClass('formStepModal').appendTo('body');

    let progressB = '<div id="progresser">' +
                        '<div id="wheredeyat" class="pulse"></div>' +
                        '<div id="numbrah">You are <span id="amounter">' + proGBar + '</span> Complete</div>' +
                    '</div>';
    $('#row1').before(progressB);
    
    // Global Validation
    $(".mr").click(function() { document.getElementById("title").value = "Mr"; });
    $(".mrs").click(function() { document.getElementById("title").value = "Mrs"; });
    $(".mss").click(function() { document.getElementById("title").value = "Miss"; });
    $(".ms").click(function() { document.getElementById("title").value = "Ms"; });
    $(".other").click(function() { document.getElementById("title").value = "Other"; });

    $(".male").click(function() { document.getElementById("gender").value = "Male"; });
    $(".female").click(function() { document.getElementById("gender").value = "Female"; });

    $(".yesSmoke").click(function() { document.getElementById("YouSmoke").value = "Yes"; });
    $(".noSmoke").click(function() { document.getElementById("YouSmoke").value = "No"; });
    
    
    if($("#lifeHunterOver50").length > 0) {
        $.getScript('/scripts/mortgagehunter/lifeHunterOver50.js'); 
    }
    
    if($("#lifeHunterOver50AgeRes").length > 0) {
        $.getScript('/scripts/mortgagehunter/LifeHunterOver50AgeRes.js'); 
    }
    
    if($("#LifeHunter").length > 0) {
        // Life Scout Template
        $.getScript('/scripts/mortgagehunter/lifeHunter.js');
    }
    
    if($("#AusLifeHunter").length > 0) {
        // Life Scout Template
        $.getScript('/scripts/mortgagehunter/auslifeHunter.js');
    }
    
    if($("#FuneralHunter").length > 0) {
        // Funeral Plan/Insurance Template
        $.getScript('/scripts/mortgagehunter/funeralHunter.js');
    }
    
    if($("#HealthHunter").length > 0) {
        // Health Template
        $.getScript('/scripts/mortgagehunter/healthHunter.js');
    }
    
    if($("#IncomeHunter").length > 0) {
        // Income Template
        $.getScript('/scripts/mortgagehunter/incomeHunter.js');
    }
    
    if($("#PopUpHunter").length > 0) {
        // For PopUps
        $.getScript('/scripts/mortgagehunter/scoutPopUp.js');
    }
    
    // Mortgageunter Template
    if($("#MortgageHunter").length > 0) {
        $.getScript('/scripts/mortgagehunter/mortgagehunter.js');  
    }
    
    // Re Mortgageunter Template
    if($("#reMortgageHunter").length > 0) {
        $.getScript('/scripts/mortgagehunter/remortgageHunter.js');  
    }
    
    // First Time Mortgageunter Template
    if($("#firstMortgageHunter").length > 0) {
        $.getScript('/scripts/mortgagehunter/firsttimemortgageHunter.js');  
    }
    
    // IsaSmartHunter Template
    if($('#isaSmartHunter').length > 0) {
        $.getScript('/scripts/mortgagehunter/isaSmartHunter.js');
    }
    
    // WeBuyEveryHome Template
    if($('#HomeHunter').length > 0) {
        $.getScript('/scripts/mortgagehunter/homeHunter.js');
    }
    
    // Equity Template
    if($('#EquityHunter').length > 0) {
        $.getScript('/scripts/mortgagehunter/equity.js');
    }
    
    // Hearing Aid Template
    if($('#HearingAid').length > 0) {
        $.getScript('/scripts/mortgagehunter/hearingAidHunter.js');
    }
    
    // Stair Lift Template
    if($('#StairHunter').length > 0) {
        $.getScript('/scripts/mortgagehunter/stairHunter.js');
    }
    
    
});