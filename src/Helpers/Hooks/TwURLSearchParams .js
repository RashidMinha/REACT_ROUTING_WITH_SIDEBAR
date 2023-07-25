import _isFunction from 'lodash/isFunction';
import _isEmpty from 'lodash/isEmpty';
export default class TwURLSearchParams extends URLSearchParams {
  // override append
  append(name, value) {
    const searchParams = new TwURLSearchParams(this.toString());
    URLSearchParams.prototype.append.call(searchParams, name, value);
    return searchParams;
  }
  // override delete
  delete(name) {
    // store the items to delete
    let itemsToDelete = [];
    // create a new instance so we don't get the new one
    const searchParams = new TwURLSearchParams(this.toString());
    if (_isFunction(name)) {
      for (let param of searchParams.entries()) {
        // add this item to delete if the callback returns true
        if (name(param[0], param[1]) === true) itemsToDelete.push(param[0]);
      }
    } else {
      itemsToDelete.push(name);
    }
    // remove all of the items requested
    itemsToDelete.forEach((item) => URLSearchParams.prototype.delete.call(searchParams, item));
    // return the new search params
    return searchParams;
  }
  // override set
  set(name, value) {
    const searchParams = new TwURLSearchParams(this.toString());
    URLSearchParams.prototype.set.call(searchParams, name, value);
    return searchParams;
  }
  toQueryString() {
    const queryString = this.toString();
    return !_isEmpty(queryString) ? '?' + queryString : '';
  }
}
