<?php if (have_rows('uslugaElement')) : ?>

    <?php while (have_rows('uslugaElement')) : the_row(); ?>

    
    <div id="servicesCarrousel">

<div class="serviceSliderElement">
    <p><?php the_sub_field('usluga_wartosc'); ?></p>
</div>


</div>
 
 <?php endwhile; ?>
<?php endif; ?>