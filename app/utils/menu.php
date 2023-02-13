<div class="nk-sidebar">           
    <div class="nk-nav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label">Menu</li>
            <?php foreach($_SESSION['user_access'] as $key => $accessModules) { ?>
                <li>
                    <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                        <i class="icon-speedometer menu-icon"></i><span class="nav-text"><?= $key ?></span>
                    </a>
                    <?php foreach($accessModules['subModulos'] as $key => $submodules) { ?>
                        <ul aria-expanded="false">
                            <li title="<?= $submodules['descripcion'] ?>">
                                <a href="<?= 'http://localhost/ColegioVirgilioMedina/app/'.$submodules['url'] ?>"><?= $submodules['titulo'] ?></a>
                            </li>
                        </ul>
                    <?php } ?>
                </li>
            <?php } ?>
        </ul>
    </div>
</div>