'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">product-review documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' : 'data-bs-target="#xs-components-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' :
                                            'id="xs-components-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' : 'data-bs-target="#xs-injectables-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' :
                                        'id="xs-injectables-links-module-AppModule-08877549a1df13ff043dff29a7ce024dedd310ee589444e1e15d80f87743aee3e966ddddbea61798e10eb4e34a9b7d1538e5f038a7d9e2db2a183d549e26618a"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' : 'data-bs-target="#xs-components-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' :
                                            'id="xs-components-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' }>
                                            <li class="link">
                                                <a href="components/UiImageCarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiImageCarouselComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiNavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiNavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiProductDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiProductDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiProductListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiProductListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiProductListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiProductListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiRatingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiRatingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiSearchbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiSearchbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiSimpleImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiSimpleImageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' : 'data-bs-target="#xs-directives-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' :
                                        'id="xs-directives-links-module-UiModule-451e8117e0ebe54bda7d80e118314dcb3efeee7b50ff49eb7b541e337404d5003b942f25b20e7b483c14c77dff66a13aa4fcf21c688271d492d00e92793837f0"' }>
                                        <li class="link">
                                            <a href="directives/UiZoomableDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiZoomableDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewsModule-bccdcea3e3aae4c125576951e98d12dabeba0354bee9ba68dc55b642fc976cbe212c679dd45b43738852f71f64f18481d4227285dd7645265321883c02081a48"' : 'data-bs-target="#xs-components-links-module-ViewsModule-bccdcea3e3aae4c125576951e98d12dabeba0354bee9ba68dc55b642fc976cbe212c679dd45b43738852f71f64f18481d4227285dd7645265321883c02081a48"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-bccdcea3e3aae4c125576951e98d12dabeba0354bee9ba68dc55b642fc976cbe212c679dd45b43738852f71f64f18481d4227285dd7645265321883c02081a48"' :
                                            'id="xs-components-links-module-ViewsModule-bccdcea3e3aae4c125576951e98d12dabeba0354bee9ba68dc55b642fc976cbe212c679dd45b43738852f71f64f18481d4227285dd7645265321883c02081a48"' }>
                                            <li class="link">
                                                <a href="components/ViewDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewDiscountComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewDiscountComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductPreview.html" data-type="entity-link" >ProductPreview</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductResponse.html" data-type="entity-link" >ProductResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});