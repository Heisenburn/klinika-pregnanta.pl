 
<?php if (have_rows('cennikElement')) : ?>

    <?php while (have_rows('cennikElement')) : the_row(); ?>
 <div class="moneyElement">


     <div class="moneyService">

         <p><?php the_sub_field('usluga'); ?></p>
     </div>

     <div class="servicePrice">
         <p><?php the_sub_field('cena'); ?></p>
     </div>



 </div>
 <?php endwhile; ?>
<?php endif; ?>