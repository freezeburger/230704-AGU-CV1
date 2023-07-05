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
                                            'data-bs-target="#components-links-module-AppModule-292a4a92e79804716e6f33c53a4c88515cc27b0fc1571559d61b1c3adc452b5a920f4b482871829852535cbd20de9d7b7e8908856042c5be369ce43681a3460a"' : 'data-bs-target="#xs-components-links-module-AppModule-292a4a92e79804716e6f33c53a4c88515cc27b0fc1571559d61b1c3adc452b5a920f4b482871829852535cbd20de9d7b7e8908856042c5be369ce43681a3460a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-292a4a92e79804716e6f33c53a4c88515cc27b0fc1571559d61b1c3adc452b5a920f4b482871829852535cbd20de9d7b7e8908856042c5be369ce43681a3460a"' :
                                            'id="xs-components-links-module-AppModule-292a4a92e79804716e6f33c53a4c88515cc27b0fc1571559d61b1c3adc452b5a920f4b482871829852535cbd20de9d7b7e8908856042c5be369ce43681a3460a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
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
                                            'data-bs-target="#components-links-module-UiModule-b5b197a65498068ca225b46d1ecaa02430eba509b4596cea9665aa8f4f70c353f80bbcb7cb4ad92c3f7750a08276086752075f6b28de01dcf0cd4304087e63f0"' : 'data-bs-target="#xs-components-links-module-UiModule-b5b197a65498068ca225b46d1ecaa02430eba509b4596cea9665aa8f4f70c353f80bbcb7cb4ad92c3f7750a08276086752075f6b28de01dcf0cd4304087e63f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-b5b197a65498068ca225b46d1ecaa02430eba509b4596cea9665aa8f4f70c353f80bbcb7cb4ad92c3f7750a08276086752075f6b28de01dcf0cd4304087e63f0"' :
                                            'id="xs-components-links-module-UiModule-b5b197a65498068ca225b46d1ecaa02430eba509b4596cea9665aa8f4f70c353f80bbcb7cb4ad92c3f7750a08276086752075f6b28de01dcf0cd4304087e63f0"' }>
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
                            </li>
                            <li class="link">
                                <a href="modules/ViewsModule.html" data-type="entity-link" >ViewsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewsModule-c8a34228bac5f5401079522d84db9a524eca833720dc29b170016061a1cf1cdc427556aa72ef06536838416eef58aa3bbafa425562d96106f3c5ab2e6db69df8"' : 'data-bs-target="#xs-components-links-module-ViewsModule-c8a34228bac5f5401079522d84db9a524eca833720dc29b170016061a1cf1cdc427556aa72ef06536838416eef58aa3bbafa425562d96106f3c5ab2e6db69df8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewsModule-c8a34228bac5f5401079522d84db9a524eca833720dc29b170016061a1cf1cdc427556aa72ef06536838416eef58aa3bbafa425562d96106f3c5ab2e6db69df8"' :
                                            'id="xs-components-links-module-ViewsModule-c8a34228bac5f5401079522d84db9a524eca833720dc29b170016061a1cf1cdc427556aa72ef06536838416eef58aa3bbafa425562d96106f3c5ab2e6db69df8"' }>
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