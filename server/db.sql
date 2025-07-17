DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    type VARCHAR(255),
    img TEXT
);

INSERT INTO restaurants (id, title, type, img) VALUES
('5', 'SOrder ชากับเธอ Chagubter - เตาปูน', 'ชา,กาแฟ, นม', 'https://food-cms.grab.com/compressed_webp/merchants/3-C2NYFCCDEE3VGE/hero/c77ace34288d449c95f8e456698d3581_1658460676354176549.webp'),
('6', 'Maru waffle - the walk ราชพฤกษ์', 'ของหวาน', 'https://food-cms.grab.com/compressed_webp/merchants/3-C3EAJ7W2WGCHCT/hero/e797bfc619e149be988a8905f3989f1e_1648047679025283875.webp'),
('7', 'Fire Tiger Coffee - Siam Block I', 'ชาไข่มุก', 'https://food-cms.grab.com/compressed_webp/merchants/3-C3T3JVMFGBUTE2/hero/62521bce6d5c4c5eb2506c6bfe131e34_1717951305906245698.webp'),
('8', 'Noonkotsi นุนกตซิ บิงซูเกาหลี - บรรทัดทอง', 'ของหวาน', 'https://food-cms.grab.com/compressed_webp/merchants/3-C2MECFTYG3UACT/hero/b742dbfc3a194d969d7b9700a9d18f9d_1619767067138384219.webp'),
('9', 'เพนก���ินชา - ถนนสาธุประดิษฐ์', 'ชาไข่มุก', 'https://food-cms.grab.com/compressed_webp/merchants/3-C2VEPEJWNADCJ6/list/2f705b3d1a004a9185df5e971a9b0818_1628167359131026898.webp'),
('10', 'LiLianLian-ตลิ่งชัน', 'ชาไข่มุก', 'https://food-cms.grab.com/compressed_webp/merchants/3-C2TZL23JKBUZLJ/hero/79e229a8b48f4936ba8a090f2f7322ff_1647564255722832308.webp'),
('11', 'ญาดาคอฟฟี่ -  ถนนประชาราษฎร์สาย 1', 'ชา,กาแฟ', 'https://food-cms.grab.com/compressed_webp/merchants/3-C2WFEX3HMBTDRT/hero/69daa574e5cb491fba07abbe61e9d4e2_1641701805364365311.webp');