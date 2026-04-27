/**
 * @param {import('knex').Knex} knex
 */

exports.up = async function (knex) {
  await knex('product').insert([
    // ===== SNACKS =====
    { name: 'Khoai lang kén', category: 'snacks', image: 'https://cdn.tgdd.vn/Files/2020/08/26/1284970/cach-lam-khoai-lang-ken-202008261116040688.jpg', price: '20000', description: 'Khoai lang chiên giòn, ngọt nhẹ.' },
    { name: 'Bánh tráng nướng', category: 'snacks', image: 'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/banh-trang-nuong-thumbnail.jpg', price: '25000', description: 'Bánh tráng nướng giòn, topping đầy đủ.' },
    { name: 'Chả cá viên chiên', category: 'snacks', image: 'https://cdn.tgdd.vn/Files/2020/09/21/1295317/cach-lam-ca-vien-chien.jpg', price: '22000', description: 'Cá viên dai ngon, chiên vàng giòn.' },
    { name: 'Đậu phộng rang muối', category: 'snacks', image: 'https://cdn.tgdd.vn/Files/2021/06/23/1363475/cach-rang-dau-phong.jpg', price: '15000', description: 'Đậu phộng rang giòn, mặn nhẹ.' },
    { name: 'Bắp xào bơ', category: 'snacks', image: 'https://cdn.tgdd.vn/2020/07/CookRecipe/Avatar/bap-xao-thumbnail.jpg', price: '25000', description: 'Bắp xào bơ thơm béo, thêm hành phi.' },
    { name: 'Khô bò miếng', category: 'snacks', image: 'https://cdn.tgdd.vn/Files/2021/12/02/1402570/kho-bo-mieng.jpg', price: '40000', description: 'Khô bò cay nhẹ, dai ngon.' },
    { name: 'Bánh flan', category: 'snacks', image: 'https://cdn.tgdd.vn/2021/05/CookProductThumb/banh-flan.jpg', price: '15000', description: 'Flan mềm mịn, béo ngậy caramel.' },
    { name: 'Rong biển sấy', category: 'snacks', image: 'https://cdn.tgdd.vn/Files/2021/07/12/1368428/rong-bien-say.jpg', price: '20000', description: 'Rong biển giòn tan, vị mặn nhẹ.' },

    // ===== FAST FOOD =====
    { name: 'Cơm chiên dương châu', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/com-chien-duong-chau.jpg', price: '45000', description: 'Cơm chiên đầy đủ topping, đậm đà.' },
    { name: 'Hủ tiếu Nam Vang', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/hu-tieu-nam-vang.jpg', price: '50000', description: 'Hủ tiếu nước trong, topping phong phú.' },
    { name: 'Bánh mì thịt nướng', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/banh-mi-thit-nuong.jpg', price: '30000', description: 'Bánh mì giòn, thịt nướng thơm lừng.' },
    { name: 'Bún thịt nướng', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/07/CookRecipe/Avatar/bun-thit-nuong.jpg', price: '45000', description: 'Bún tươi ăn kèm thịt nướng và rau.' },
    { name: 'Cơm bò lúc lắc', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/10/CookRecipe/Avatar/com-bo-luc-lac.jpg', price: '65000', description: 'Bò mềm, xào đậm vị, ăn với cơm nóng.' },
    { name: 'Mì cay Hàn Quốc', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/07/CookRecipe/Avatar/mi-cay.jpg', price: '55000', description: 'Mì cay cấp độ, topping đa dạng.' },
    { name: 'Cơm gà nướng', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/09/CookRecipe/Avatar/com-ga-nuong.jpg', price: '55000', description: 'Gà nướng thơm, da giòn, cơm nóng.' },
    { name: 'Bún riêu cua', category: 'fast_food', image: 'https://cdn.tgdd.vn/2021/08/CookRecipe/Avatar/bun-rieu.jpg', price: '40000', description: 'Bún riêu chua nhẹ, đậm đà.' },

    // ===== DRINKS =====
    { name: 'Trà tắc', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/tra-tac.jpg', price: '15000', description: 'Trà tắc chua ngọt, giải khát.' },
    { name: 'Sữa chua đá', category: 'drinks', image: 'https://cdn.tgdd.vn/2021/05/CookProductThumb/sua-chua-da.jpg', price: '20000', description: 'Sữa chua mát lạnh, tốt cho tiêu hóa.' },
    { name: 'Sinh tố dâu', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/sinh-to-dau.jpg', price: '30000', description: 'Sinh tố dâu chua ngọt, thơm ngon.' },
    { name: 'Nước ép táo', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/nuoc-ep-tao.jpg', price: '30000', description: 'Nước ép táo tươi, giàu vitamin.' },
    { name: 'Cacao đá', category: 'drinks', image: 'https://cdn.tgdd.vn/2021/05/CookProductThumb/cacao-da.jpg', price: '30000', description: 'Cacao đá béo, đậm vị socola.' },
    { name: 'Trà vải', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/tra-vai.jpg', price: '30000', description: 'Trà vải thơm, ngọt nhẹ.' },
    { name: 'Soda chanh', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/soda-chanh.jpg', price: '25000', description: 'Soda chanh mát lạnh, sảng khoái.' },
    { name: 'Nước ép dứa', category: 'drinks', image: 'https://cdn.tgdd.vn/2020/07/CookProductThumb/nuoc-ep-dua.jpg', price: '30000', description: 'Nước ép dứa chua ngọt tự nhiên.' },
  ]);
};

exports.down = async function (knex) {
  await knex('product').whereIn('category', ['snacks', 'fast_food', 'drinks']).del();
};