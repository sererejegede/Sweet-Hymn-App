CREATE TABLE IF NOT EXISTS `lyrics` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `title` text,
  `chorus` text
);


INSERT INTO `lyrics` (`id`, `title`, `chorus`) VALUES
(1, 'In Christ Alone', ''),
(2, 'On a Hill, Faraway', ''),
(3, 'To God be the Glory', '');

CREATE TABLE IF NOT EXISTS `verses` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `number` INTEGER DEFAULT '1',
  `content` text,
  `lyric_id` INTEGER
);

--INSERT INTO `verses` (`id`, `number`, `content`, `lyric_id`) VALUES
--(2, 1, 'In Christ alone my hope is found <br>\r\nHe is my light, my strength, my song <br>\r\nThis Cornerstone, this solid ground <br>\r\nFirm through the fiercest drought and storm <br>\r\nWhat heights of love, what depths of peace <br>\r\nWhen fears are stilled, when strivings cease <br>\r\nMy Comforter, my All in All <br>\r\nHere in the love of Christ I stand <br>', 1),
--(3, 2, 'In Christ alone, who took on flesh <br>\r\nFullness of God in helpless babe <br>\r\nThis gift of love and righteousness <br>\r\nScorned by the ones He came to save <br>\r\n\'Til on that cross as Jesus died <br>\r\nThe wrath of God was satisfied <br>\r\nFor every sin on Him was laid <br>\r\nHere in the death of Christ I live, I live <br>', 1),
--(4, 3, 'There in the ground His body lay <br>\r\nLight of the world by darkness slain <br>\r\nThen bursting forth in glorious Day <br>\r\nUp from the grave He rose again <br>\r\nAnd as He stands in victory <br>\r\nSin\'s curse has lost its grip on me <br>\r\nFor I am His and He is mine <br>\r\nBought with the precious blood of Christ <br>', 1),
--(5, 4, 'No guilt in life, no fear in death <br>\r\nThis is the power of Christ in me <br>\r\nFrom life\'s first cry to final breath <br>\r\nJesus commands my destiny <br>\r\nNo power of hell, no scheme of man <br>\r\nCan ever pluck me from His hand <br>\r\nTill He returns or calls me home <br>\r\nHere in the power of Christ I\'ll stand <br>', 1);


--ALTER TABLE `verses`
--  ADD CONSTRAINT `verses_ibfk_1` FOREIGN KEY (`lyric_id`) REFERENCES `lyrics` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
--COMMIT;
