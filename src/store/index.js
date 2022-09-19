import {createStore} from 'vuex';
import Titles from '../data/index';
import Filters from '../data/filters';

export default createStore({
    state: {
        titles: Titles,
        filters: Filters,
    }
});
