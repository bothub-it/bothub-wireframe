<template>
  <layout>
    <div class="columns">
      <div class="column is-2 ">
        <aside class="menu">
          <p class="menu-label">
            General
          </p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Customers</a></li>
          </ul>
          <p class="menu-label">
            Administration
          </p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">
            Transactions
          </p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
      <div class="column">
        <step-5 />
      </div>
      <b-modal
        :active.sync="isComponentModalActive"
        has-modal-card
        trap-focus
        aria-role="dialog"
        aria-modal>
        <div class="card has-text-centered">
          <div class="card-content">
            <img
              src="~@/assets/imgs/mascot.svg">
            <h1>Let's start training your bot! </h1>
            <p>Hi! I will be your guide to help you perform.
            The first training and integration of your repository</p>
            <p>can we start?</p>
          </div>
          <footer class="modal-card-foot">
            <button class="button is-primary">Lets go</button>
          </footer>
        </div>
      </b-modal>
    </div>
  </layout>
</template>

<script>
import Layout from '@/components/shared/Layout';
import RepositoryBase from './base';
import SideBarNavigation from '@/components/shared/SideBar';
import step5 from './step5';


export default {
  name: 'RepositoryHome',
  components: {
    Layout,
    SideBarNavigation,
    step5,
  },
  extends: RepositoryBase,
  data() {
    return {
      isComponentModalActive: true,
    };
  },
};
</script>

<style lang="scss">
.card {
  width: 500px;
  border-radius: 20px;

  img {
    width: 200px;
  }
}

.modal-card-foot {
  display: flex;
  justify-content: center;
}
</style>
