<template>
  <div class="app">
    <div class="bh-grid bh-grid--column">
      <section class="bh-grid__item bh-grid__item--nested">
        <header-component />
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <installation />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <typography />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <colors />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <Table />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <grid />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <autocomplete />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <card />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <buttons />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <icons />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <avatar />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <badge />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <modal />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <text-input />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <dropdown />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <loading />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <notification />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <icon-button />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <language-flag />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <tooltip />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <select-input />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <highlighted-pre />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <tooltip-hover />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <tab-navigation />
            </div>
          </div>
        </bh-card>
      </section>
      <section class="bh-grid__item">
        <bh-card>
          <div class="bh-grid">
            <div class="bh-grid__item bh-grid__item--nested">
              <stepper />
            </div>
          </div>
        </bh-card>
      </section>
    </div>
  </div>
</template>

<script>
import Installation from './installation/Installation';
import Typography from './typography/Typography';
import Grid from './grid/Grid';
import Autocomplete from './autocomplete/Autocomplete';
import Card from './card/Card';
import Buttons from './button/Buttons';
import HeaderComponent from './header/HeaderComponent';
import Icons from './icon/Icon';
import Avatar from './avatar/Avatar';
import Badge from './badge/Badge';
import Modal from './modal/Modal';
import TextInput from './text-input/TextInput';
import Dropdown from './dropdown/Dropdown';
import loading from './loading/Loading';
import Notification from './notification/Notification';
import IconButton from './icon-button/IconButton';
import LanguageFlag from './languageFlag/LanguageFlag';
import Tooltip from './tooltip/Tooltip';
import Table from './table/Table';
import Colors from './colors/Colors';
import SelectInput from './select/Select';
import HighlightedPre from './highlighted-pre/HighlightedPre';
import TooltipHover from './tooltip-hover/TooltipHover';
import TabNavigation from './tab-navigation/TabNavigation';
import Stepper from './stepper/Stepper';

export default {
  name: 'App',
  components: {
    Installation,
    Typography,
    Grid,
    Autocomplete,
    Card,
    Buttons,
    HeaderComponent,
    Icons,
    Avatar,
    Badge,
    Modal,
    TextInput,
    Dropdown,
    loading,
    Notification,
    IconButton,
    LanguageFlag,
    Tooltip,
    Table,
    Colors,
    SelectInput,
    HighlightedPre,
    TooltipHover,
    TabNavigation,
    Stepper,
  },
};
</script>
