<template>
  <nav>
    <div class="nav-wrapper">
      <ul class="left hide-on-med-and-down">
        <li> <a class='dropdown-button' href='#' data-activates='dropdown1' data-beloworigin="true">Menu1</a></li>
      </ul>
    </div>
  </nav>

  <ul id='dropdown1' class='dropdown-content dropdown-nested'>
    <li><a class='dropdown-button' href='#!' data-activates='dropdown2' data-hover="true" data-alignment="left">1<span class="right-triangle">&#9656;</span></a></li>
    <li><a href="#!">2</a></li>
    <li><a href="#!">3</a></li>
  </ul>

  <ul id='dropdown2' class='dropdown-content dropdown-nested'>
    <li><a href="#!">4</a></li>
    <li><a class='dropdown-button' href="#!" data-activates="dropdown3" data-hover="hover" data-alignment="left">5<span class="right-triangle">&#9656;</span></a></li>
    <li><a href="#!">6</a></li>
  </ul>

  <ul id='dropdown3' class='dropdown-content dropdown-nested'>
    <li><a href="#!">7</a></li>
    <li><a href="#!">8</a></li>
    <li><a href="#!">9</a></li>
    <li><a href="#!">10</a></li>
  </ul>
</template>

<script>
/* import M from 'materialize-css'; */

export default {
  /* fetch('https://belferat.online/test.php ', {
    method: 'POST',
  }) */
}

</script>

<style>
  .right-triangle {
    float: right;
  }

  .dropdown-nested {
    width: max-content !important;
    max-width: 300px !important;
    overflow-y: visible !important;
  }

  .dropdown-content .dropdown-content {
    margin-left: 100%;
  }
</style>
