var navstatus = 0;

function openNav()
{
    if(!navstatus)
    {
        $('.maindiv').css('width','100%')
        $('li').css('display','block')
    }
}