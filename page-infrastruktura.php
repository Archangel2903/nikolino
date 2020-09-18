<!-- CONTENT -->
    <main class="content">
        <div class="section head-section">
            <div class="container head-block">
                <div class="row align-items-baseline">
                    <div class="col-lg-2">
                        <nav class="breadcrumb">
                            <a href="/" class="breadcrumb__item"><span class="breadcrumb__text">на главную</span></a>
                            <a class="breadcrumb__item"><span class="breadcrumb__text"><?php the_title() ?></span></a>
                        </nav>
                    </div>

                    <div class="col-lg-10">
                        <h1 class="main-title mb-3">инфраструктура</h1>

                        <h2 class="title mb-5 text-pre-line">Спорт и отдых</h2>
                    </div>
                </div>
            </div>
        </div>

        <div class="section rest-section">
            <div class="container">
                <div class="rest-tabs">
                    <ul>
                        <?php
                        $list = get_field('list');
                        $counter = 1;
                        if (!empty($list)) {
                           foreach ($list as $item) {
                             ?>
                            <li><a href="#tabs-<?php echo $counter ?>">
                            <picture><img src="<?php echo get_template_directory_uri() ?>/img/default.svg" data-src="<?php echo $item['img'] ?>" alt=""></picture>
                            <span><?php echo $item['title'] ?></span></a></li>
                             <?php
                             $counter++;
                           }
                        }
                         ?>
                    </ul>
                    <?php
                    $counter2 = 1;
                    if (!empty($list)) {
                        foreach ($list as $item) {
                            ?>
                    <div id="tabs-<?php echo $counter2 ?>" class="rest-tabs__container">
                        <div class="rest-tabs__info-wrap">
                            <div class="label-box">
                                <?php 
                                if (!empty($item['checkbox'])) {
                                    if ($item['checkbox'][1]===null) {
                                        if ($item['checkbox'][0]==='1 очередь') {
                                        echo ' <span class="label-box__item first-item">'
                                        . $item['checkbox'][0] . 
                                        '</span>';
                                        }
                                        else{
                                        echo ' <span class="label-box__item second-item">'
                                        . $item['checkbox'][0] . 
                                        '</span>';
                                        }
                                    }
                                else{
                                  echo ' <span class="label-box__item first-item">'
                                    . $item['checkbox'][0] . 
                                    '</span>';
                                    echo ' <span class="label-box__item second-item">'
                                    . $item['checkbox'][1] . 
                                    '</span>';
                                }
                              }
                            ?>
                        </div>
                            <?php
                         if (!empty($item['list'])) {
                                   foreach ($item['list'] as $item2) {
                                     ?>
                                       <div class="rest-tabs__info-box">
                                        <p class="rest-tabs__info-title"><?php echo $item2['title'] ?>:</p>
                                        <span class="rest-tabs__info-text"><?php echo $item2['value'] ?></span>
                                    </div>
                                     <?php
                                   }
                               }
                                 ?>
                        </div>
                        <div class="rest-tabs__slider">
                            <?php
                            if (!empty($item['slider'])) {
                            foreach ($item['slider'] as $item3) {
                                     ?>
                                <div class="rest-tabs__slider-item">
                                <picture>
                                    <img src="<?php echo $item3['url'] ?>" alt="rest-slide">
                                </picture>
                                </div>
                                     <?php
                                   }
                               }
                             ?>
                        </div>
                    </div>
                            <?php
                            $counter2++;
                        }
                    }
                     ?>
                </div>
            </div>
        </div>

        <div class="section infrastructure-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-2">
                        <h2 class="title mb-5">Детям</h2>
                    </div>
                </div>

                <div class="row">
                    <div class="container infrastructure">
                        <div class="row">
                            <div class="col-lg-4 offset-lg-2 align-self-end">
                                <p class="infrastructure__signature m-0">
                                         <?php the_field('text') ?>
                                </p>
                            </div>
                            <div class="col-lg-6">
                                <picture>
                                    <img src="<?php echo get_template_directory_uri() ?>/img/default.svg" data-src="<?php the_field('img') ?>" class="infrastructure__image" alt="infrastructure">
                                </picture>
                            </div>
                        </div>

                        <div class="infrastructure__description">
                            <?php
                            $list2 = get_field('list2');
                            if (!empty($list2)) {
                                foreach ($list2 as $item) {
                                    ?>
                            <div class="infrastructure__description-box">
                                <picture>
                                    <img src="<?php echo $item['img'] ?>" alt="">
                                </picture>

                                <p class="infrastructure__description-signature"><?php echo $item['title'] ?></p>
                                <div class="label-box">
                                    <?php
                                if (!empty($item['checkbox'])) {
                                    if ($item['checkbox'][1]===null) {
                                        if ($item['checkbox'][0]==='1 очередь') {
                                        echo ' <span class="label-box__item first-item">'
                                        . $item['checkbox'][0] . 
                                        '</span>';
                                        }
                                        else{
                                        echo ' <span class="label-box__item second-item">'
                                        . $item['checkbox'][0] . 
                                        '</span>';
                                        }
                                    }
                                else{
                                  echo ' <span class="label-box__item first-item">'
                                    . $item['checkbox'][0] . 
                                    '</span>';
                                    echo ' <span class="label-box__item second-item">'
                                    . $item['checkbox'][1] . 
                                    '</span>';
                                }
                              }
                                     ?>
                                </div>
                                <p class="infrastructure__description-text">
                                    <?php echo $item['text'] ?>
                                 </p>
                            </div>
                                    <?php
                                }
                            }
                             ?>
                        </div>
                    </div>

                    <div class="container park">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-2">
                                <h2 class="title text-primary">Гранд-парк <span class="park__subtitle">Площадь территории для прогулок и отдыха превышает 3 Га</span></h2>
                            </div>
                        </div>

                        <div class="park__slider">
                            <?php 
                            $slider = get_field('slider');
                            if (!empty($slider)) {
                                foreach ($slider as $item) {
                                    ?>
                                <div class="park__slider-item">
                                <picture>
                                    <img src="<?php echo get_template_directory_uri() ?>/img/default.svg" data-src="<?php echo $item['url'] ?>" alt="park slide">
                                </picture>
                                </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section map-section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 offset-lg-2">
                        <h2 class="title mb-5">Рядом с поселком</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-2 pt-2">
                        <span>На карте:</span>
                    </div>

                    <div class="map-switcher-wrap col-lg-10">
                        <ul class="map-switcher d-flex flex-wrap p-0 mb-4"></ul>
                    </div>
                </div>
                <div id="map">
                    <picture><img src="<?php echo get_template_directory_uri() ?>/img/default.svg" data-src="<?php echo get_template_directory_uri() ?>/img/map.jpg" alt="map" style="width: 100%;"></picture>
                </div>
            </div>
        </div>

       <div class="section callback-section">
            <div class="container">
                <div class="callback d-flex flex-wrap">
                    <?php $mennagers = get_field('mennagers', 8);
                          $currentMenager = $mennagers[rand(0,count($mennagers)-1)];
                     ?>
                    <picture>
                        <img src="<?php echo get_template_directory_uri() ?>/img/default.svg" data-src="<?php echo $currentMenager['img'] ?>" alt="manager">
                    </picture>

                    <p class="callback__title"><?php the_field('text33') ?></p>

                    <p class="callback__text"><?php echo $currentMenager['name'] ?>
                        <span><?php echo $currentMenager['position'] ?></span>
                    </p>

                    <form id="21" class="callback__form">
                        <button type="button" class="callback__form-switch">Выбрать время звонка</button>

                        <fieldset class="callback__form-hide hide">
                            <label>
                                <input type="text" class="input datepicker" placeholder="ДД.ММ.ГГГГ" readonly>
                                <svg>
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-date"></use>
                                </svg>
                            </label>

                            <label>
                                <input type="time" class="input mask-time">
                            </label>

                            <label>
                                <select name="timezone" id="timezone" class="input-select">
                                    <option value="3">(GMT+3:00) Краснодар</option>
                                    <option value="2">(GMT+2:00) Краснодар</option>
                                    <option value="4">(GMT+4:00) Краснодар</option>
                                </select>
                            </label>
                        </fieldset>

                        <fieldset class="callback__form-visible d-inline-flex">
                            <label>
                                <input type="text" class="callback__form-phone input mask-phone" placeholder="+7">
                            </label>

                            <label>
                                <input type="checkbox">
                                <span class="callback__form-checkbox"></span>
                                <span>Согласие на обработку ПД</span>
                            </label>
                        </fieldset>

                        <button type="submit" class="callback__form-submit button button-primary">Перезвоните мне</button>
                         <fieldset><label class="error-text">Ошибка: <span>Номер телефона введен некорректно</span></label></fieldset>
                    </form>
                </div>
            </div>
        </div>

        <div class="section contact-section">
            <div class="container">
                <div class="contacts-block text-center">
                    <a href="tel:+<?php echo str_replace('-', '', get_field('phone_main', 8)) ?>" class="contacts-block__number"><?php the_field('phone_main', 8) ?></a>

                    <div class="contacts-block__social">
                        <p class="contacts-block__social-text text-left">Много интересного
                            в наших соцсетях</p>

                        <div class="contacts-block__social-list">
                            <a href="<?php the_field('link_vk', 8) ?>" class="contacts-block__social-link" target="_blank">
                                <svg>
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-vk"></use>
                                </svg>
                            </a>

                            <a href="<?php the_field('link_facebook', 8) ?>" class="contacts-block__social-link" target="_blank">
                                <svg>
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-fb"></use>
                                </svg>
                            </a>

                            <a href="<?php the_field('link_ok', 8) ?>" class="contacts-block__social-link" target="_blank">
                                <svg>
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-ok"></use>
                                </svg>
                            </a>

                            <a href="<?php the_field('link_instagram', 8) ?>" class="contacts-block__social-link" target="_blank">
                                <svg>
                                    <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-inst"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <!--<picture>
            <img src="<?php echo get_template_directory_uri() ?>/img/loader.svg" data-src="<?php echo get_template_directory_uri() ?>/img/loader.svg" alt="loader" title="loader">
        </picture>
        <svg>
            <use xlink:href="<?php echo get_template_directory_uri() ?>/img/spritemap.svg#sprite-ok"></use>
        </svg>

        <div>
            <button class="button button-primary">primary</button>
            <button class="button button-secondary">secondary</button>
            <button class="button button-light">light</button>
            <button class="button button-violet">violet</button>
            <button class="button button-green">green</button>
            <button class="button button-square">square</button>
        </div>

        <div>
            <a href="#1" class="button button-primary">primary link</a>
            <a href="#2" class="button button-secondary">secondary link</a>
            <a href="#3" class="button button-light">light link</a>
            <a href="#4" class="button button-violet">violet link</a>
            <a href="#5" class="button button-green">green link</a>
            <a href="#6" class="button button-square">square link</a>
        </div>-->
    </main>
    <!-- CONTENT END -->
