import { $ } from '@wdio/globals';

export const HomePage = {
    productsTitle: () => $('android=new UiSelector().text("PRODUCTS")'),
    menuIcon: () => $('android=new UiSelector().className("android.widget.ImageView").instance(1)'),

    async isProductsTableDisplayed() {
        return await this.productsTitle().isDisplayed();
    }
};

export default HomePage;