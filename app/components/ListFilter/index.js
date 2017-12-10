import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFilter from 'react-text-filter';

class ListFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    };
  }

  render() {
    const { filterProp, items, itemsPropName, inputPlaceholder, listContainerClassName, listProps } = this.props;

    const filteredItems = this.state.filter ?
      items.filter((item) => item[filterProp].toLowerCase().indexOf(this.state.filter.toLowerCase()) !== -1) :
      items;

    return (
      <div className="list-filter-container fill-parent">
        <TextFilter
          onFilter={({ target: { value: filter } }) => this.setState({ filter })}
          placeholder={inputPlaceholder || 'Filter'}
          className="mdl-textfield__input list-filter-input"
        />
        <div className={"list-filter-items-container " + this.props.listContainerClassName}>
          {this.props.renderList({ [itemsPropName]: filteredItems, ...listProps })}
        </div>
      </div>
    );
  }
}

ListFilter.propTypes = {
  filterProp: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemsPropName: PropTypes.string.isRequired,
  listProps: PropTypes.object,
  renderList: PropTypes.func.isRequired,
  listContainerClassName: PropTypes.string,
  inputPlaceholder: PropTypes.string,
};


export default ListFilter;
