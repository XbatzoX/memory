function radioHoverEffect(idSpan:string, idDiv:string):void{
    const contentSpanRef = document.getElementById(idSpan);
    const contentDivRef = document.getElementById(idDiv);
    if(contentSpanRef){highlightText(contentSpanRef);};
    if(contentDivRef){showDivider(contentDivRef);};
}

function highlightText(element:HTMLElement):void{
    element.classList.remove('radio__label');
    element.classList.add('radio__label--highlight');
}

function showDivider(element:HTMLElement):void{
    element.classList.remove('invisible');
}

function radioNormalView(idSpan:string, idDiv:string):void{
    const contentSpanRef = document.getElementById(idSpan);
    const contentDivRef = document.getElementById(idDiv);
    if(contentSpanRef){removeHighlightFromText(contentSpanRef);};
    if(contentDivRef){removeDividerContainer(contentDivRef);};
}

function removeHighlightFromText(element:HTMLElement):void{
    element.classList.remove('radio__label--highlight');
    element.classList.add('radio__label');
}

function removeDividerContainer(element:HTMLElement):void{
    element.classList.add('invisible');
}

const labelCodeTheme = document.getElementById('label_code_theme');
if(labelCodeTheme){
    labelCodeTheme.addEventListener('mouseover', () => {
        radioHoverEffect('span_code_theme', 'divider_code_theme');
    });
    labelCodeTheme.addEventListener('mouseout', () => {
        const inputCodeTheme = labelCodeTheme.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputCodeTheme?.checked){
            radioNormalView('span_code_theme', 'divider_code_theme');
        }
    });
}

const labelFoodTheme = document.getElementById('label_food_theme');
if(labelFoodTheme){
    labelFoodTheme.addEventListener('mouseover', () => {
        radioHoverEffect('span_food_theme', 'divider_food_theme');
    });
    labelFoodTheme.addEventListener('mouseout', () => {
        const inputFoodTheme = labelFoodTheme.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputFoodTheme?.checked){
            radioNormalView('span_food_theme', 'divider_food_theme');
        }
    });
}



const inputTheme = document.querySelectorAll<HTMLInputElement>('input[name = "theme"]');
inputTheme.forEach(input => {
    input.addEventListener('change', () => {
        actionsCodeTheme(input);
        actionsFoodTheme(input);
    });
});

function actionsCodeTheme(input:HTMLInputElement):void{
    if(input.value == 'code_vibes'){
        if(input.checked){
            radioHoverEffect('span_code_theme', 'divider_code_theme');
            radioNormalView('span_food_theme', 'divider_food_theme');
        }else{
            radioNormalView('span_code_theme', 'divider_code_theme');    
        }
    }
}

function actionsFoodTheme(input:HTMLInputElement):void{
    if(input.value == 'food_theme'){
        if(input.checked){
            radioHoverEffect('span_food_theme', 'divider_food_theme');
            radioNormalView('span_code_theme', 'divider_code_theme');
        }else{
            radioNormalView('span_food_theme', 'divider_food_theme');
        }
    }
}