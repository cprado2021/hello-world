<iframe id="myiframe" width="1400" height="600" id="DlgFramee" class="ms-dlgFrame" frameborder="0" src="/sites/tst/SitePages/Home.aspx"></iframe>

<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script type="text/javascript">
        $(function () {
            $('#myiframe').load(function () {
                $(this).contents().find('#suiteBarTop').hide();
            });

        })        
    </script>
