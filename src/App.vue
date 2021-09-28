<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <ul class="left">
        <li class="nav-item nav-main-item" v-for="menuItem in navMainItems" :key="menuItem.href"><a href='#!' class='dropdown-button' @click="openNested">{{menuItem.name}}</a>
          <ul class='dropdown-content dropdown-nested'>
            <li class="nav-item nav-item-firstly" v-for="menuItem in filterSecondNested(menuItem.index_1)" :key="menuItem.href"><a href='#!' class='dropdown-button' @click="openNested">{{menuItem.name}}</a>
              <ul class='dropdown-content dropdown-nested dropdown-nested-secondary'>
                <li class="nav-item nav-item-secondary" v-for="menuItem in filterThirdNested(menuItem.index_1, menuItem.index_2)" :key="menuItem.href"><a href='#!'>{{menuItem.name}}</a></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        menuItems: [],
      }
    },
    methods: {
      getData() {
        fetch('https://belferat.online/test.php', {
          method: 'POST',
          body: JSON.stringify({act: 'get_menu'}),
        })
          .then((response) => {
            return response.json();
          })
          .then((items) => {
            this.menuItems = items;
          })
      },
      filterSecondNested(index) {
        return this.menuItems.filter((item) => {
          return item.index_1 === index && item.index_2 !== '1' && item.index_3 === '0'
        });
      },
      filterThirdNested(index1, index2) {
        return this.menuItems.filter((item) => {
          return item.index_1 === index1 && item.index_2 === index2 && item.index_3 !== '0'
        });
      },
      openNested(e) {
        if (e.target.closest('li').classList.contains('nav-main-item')) {
          this.closeNested();
        }
        if (e.target.closest('li').classList.contains('nav-item-firstly')) {
          this.closeSecondaryNested();
        }
        e.target.closest('li').querySelector('ul').classList.add('active');
      },
      closeNested() {
        document.querySelectorAll('.dropdown-nested').forEach((item) => {
          item.classList.remove('active');
        })
      },
      closeSecondaryNested() {
        document.querySelectorAll('.dropdown-nested-secondary').forEach((item) => {
          item.classList.remove('active');
        })
      }
    },
    mounted() {
      this.getData();
    },
    computed: {
      navMainItems: function() {
        return this.menuItems.filter((item) => {
          return item.index_2 === '1'
        });
      },
    },
  }
</script>

<style>
  .nav {
    height: 65px;
    min-height: max-content;
    flex-wrap: wrap;
  }

  .nav-wrapper {
    max-width: 1400px;
  }

  .nav-item {
    position: relative;
  }

  .right-triangle {
    float: right;
  }
  .dropdown-button {
    position: relative;
  }

  .dropdown-nested {
    width: max-content !important;
    max-width: 300px !important;
    overflow-y: visible !important;
    position: absolute;
    display: none;
  }

  .dropdown-nested.active {
    display: block;
    top: 64px;
    left: 0px;
    opacity: 1;
    transition: background-color .3s;
    font-size: 1rem;
    color: #fff;
    display: block;
    padding: 0 15px;
    cursor: pointer;
  }

  .dropdown-nested-secondary.active {
    top: 0;
  }

  .dropdown-content .dropdown-content {
    margin-left: 100%;
  }
</style>
