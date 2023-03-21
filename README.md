# AVASTR
hacker de redes sociales :  STR

Discord : https://discord.gg/r5KjtfhhPN

Web : https://appbsz.crearforo.net

//////////////////////// HTML VERCION MOVILE ////////////////////////////////////////
<div class="box">
    <div class="forum-header">

        <span id="forum-description">{switch_logo_mob.switch_site_desc.DESCRIPTION}</span>

        <div class="forum-header-background">
            <img src="{switch_logo_mob.LOGO_MOB}" alt="{SITENAME}"/>
        </div>
        <div class="forum-header-content">
            <span class="vertical-help"></span><img src="{switch_logo_mob.LOGO_MOB}" alt="{SITENAME}"/>
        </div>
    </div>
</div>
<div id="join_index_btn" class="box">

    <a href="{switch_logo_mob.switch_join_button.U_LINK}" class="btn"><i class="material-icons">group_add</i>&nbsp;{switch_logo_mob.switch_join_button.L_TEXT}</a>

</div>

<div class="box introduction">

    <h2>{message_admin_index.message_admin_titre.MES_TITRE}</h2>
    
    <div class="box-content">{message_admin_index.message_admin_txt.MES_TXT}</div>

</div>


{BOARD_INDEX}

{giefmod_index1.MODVAR}

<div class="box-subtle box-widget-bottom">
    <h2>
        {L_STATISTICS}
    </h2>
    {TOTAL_POSTS}<br />
    {TOTAL_USERS}<br />
    {NEWEST_USER}<br />
</div>

<div class="box-subtle box-widget-bottom">
    <h2>
        {L_WHO_IS_ONLINE}
    </h2>
    {TOTAL_USERS_ONLINE}<br />
    {RECORD_USERS}

    <div class="whoisonline-toggle">{L_WHO_IS_ONLINE}</div>

    {L_ONLINE_USERS}
</div>
<div class="whoisonline-modal">
    <div class="whoisonline-title">{L_WHO_IS_ONLINE}<i class="whoisonline-close material-icons">close</i></div>
    <div class="whoisonline-list">{LOGGED_IN_USER_LIST}{L_CONNECTED_MEMBERS}</div>
</div>
<script>
    $(function(){
        $('.whoisonline-toggle').on('click', function() {
            $('.whoisonline-modal').show();
        });
        $('.whoisonline-close').on('click', function() {
            $('.whoisonline-modal').hide();
        });
        $(document).on('mouseup', function(e) {
            let container = $(".whoisonline-modal");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                console.log('hide');
                container.hide();
            }
        });
    });
</script>
//////////////////////////////////////////////////////////////////////
