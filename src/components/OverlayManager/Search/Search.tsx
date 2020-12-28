import "./scss/index.scss";

import classNames from "classnames";
import { stringify } from "query-string";
import * as React from "react";
import { injectIntl, WrappedComponentProps } from "react-intl";
// import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { RouteComponentProps, withRouter } from "react-router-dom";
import ReactSVG from "react-svg";

import { BookingProduct } from "@app/components/organisms/BookingProduct";

// import { commonMessages } from '@temp/intl';
import {
  Button,
  Loader,
  OfflinePlaceholder,
  Overlay,
  OverlayContextInterface,
  OverlayType,
} from "../..";
import { searchUrl } from "../../../app/routes";
import { maybe } from "../../../core/utils";
import searchImg from "../../../images/search.svg";
import closeImg from "../../../images/x.svg";
import { DebouncedTextField } from "../../Debounce";
import { Error } from "../../Error";
import NetworkStatus from "../../NetworkStatus";
import { SearchResults } from "./gqlTypes/SearchResults";
import NothingFound from "./NothingFound";
import ProductItem from "./ProductItem";
import { TypedSearchResults } from "./queries";

interface SearchProps extends WrappedComponentProps, RouteComponentProps {
  overlay: OverlayContextInterface;
}

interface SearchState {
  search: string;
}

class Search extends React.Component<SearchProps, SearchState> {
  state = { search: "" };

  submitBtnRef = React.createRef<HTMLButtonElement>();

  componentDidUpdate(_prevProps: SearchProps, prevState: SearchState) {
    if (
      !!prevState.search.length &&
      this.props.overlay.type !== OverlayType.search
    ) {
      this.setState({ search: "" });
    }
  }

  get hasSearchPhrase() {
    return this.state.search.length > 0;
  }

  get isProductLink() {
    const reg = /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g;
    const pattern = new RegExp(reg); // fragment locator
    return !!pattern.test(this.state.search);
  }

  get redirectTo() {
    return { pathname: searchUrl, search: `?${this.searchQs}` };
  }

  get searchQs() {
    return stringify({ q: this.state.search });
  }

  hasResults = (data: SearchResults) =>
    maybe(() => !!data.products.edges.length);

  handleSubmit = (evt: React.FormEvent) => {
    if (this.hasSearchPhrase && this.submitBtnRef.current) {
      this.props.overlay.hide();
      this.props.history.push(`${searchUrl}?${this.searchQs}`);
    }

    evt.preventDefault();
  };

  handleInputBlur = () => {
    if (!this.hasSearchPhrase) {
      this.props.overlay.hide();
    }
  };

  render() {
    const autoFocus = true;

    return (
      <Overlay testingContext="searchOverlay" context={this.props.overlay}>
        <div
          className={classNames("search", {
            "search--has-results": this.hasSearchPhrase,
          })}
        >
          <form onClick={e => e.stopPropagation()} onSubmit={this.handleSubmit}>
            <div className="search__input">
              <DebouncedTextField
                onChange={evt => this.setState({ search: evt.target.value })}
                value={this.state.search}
                iconLeft={
                  <ReactSVG path={closeImg} onClick={this.props.overlay.hide} />
                }
                iconRight={<ReactSVG path={searchImg} />}
                autoFocus={autoFocus}
                placeholder="Үгээр хайх & Бараа захиалах"
                onBlur={this.handleInputBlur}
              />
            </div>
            <div
              className={classNames({
                search__products: true,
                "search__products--expanded": this.hasSearchPhrase,
              })}
            >
              <NetworkStatus>
                {isOnline => {
                  if (this.hasSearchPhrase && !this.isProductLink) {
                    return (
                      <TypedSearchResults
                        renderOnError
                        displayError={false}
                        errorPolicy="all"
                        variables={{ query: this.state.search }}
                      >
                        {({ data, error, loading }) => {
                          if (this.hasResults(data)) {
                            return (
                              <>
                                <ul>
                                  {data.products.edges.map(product => (
                                    <ProductItem
                                      {...product}
                                      key={product.node.id}
                                    />
                                  ))}
                                </ul>
                                <div className="search__products__footer">
                                  {loading ? (
                                    <Loader />
                                  ) : (
                                    <Button
                                      testingContext="searchProductsButton"
                                      btnRef={this.submitBtnRef}
                                      type="submit"
                                    >
                                      Бүх үр дүнг харах
                                    </Button>
                                  )}
                                </div>
                              </>
                            );
                          }

                          if (error) {
                            return isOnline ? (
                              <Error error={error.message} />
                            ) : (
                              <OfflinePlaceholder />
                            );
                          }

                          return <NothingFound search={this.state.search} />;
                        }}
                      </TypedSearchResults>
                    );
                  }
                  return null;
                }}
              </NetworkStatus>
            </div>
          </form>
          {this.isProductLink && (
            <BookingProduct productUrl={this.state.search} />
          )}
        </div>
      </Overlay>
    );
  }
}

// Workaround ATM for:
// withRouter(Search): Function components do not support contextType
export default injectIntl(
  withRouter(
    (
      props: WrappedComponentProps &
        RouteComponentProps & { overlay: OverlayContextInterface }
    ) => <Search {...props} />
  )
);
