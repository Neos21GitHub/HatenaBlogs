console.log('Murga : Load Start');
const exec = () => {
  console.log('Murga : Exec Start');
  const pairs = [
    ['2016/10/15/233845', '2016/10/15-01'],
    ['2016/10/15/233452', '2016/10/15-02'],
    ['2016/10/16/013244', '2016/10/16-01'],
    ['2016/10/16/011648', '2016/10/16-02'],
    ['2016/10/23/132642', '2016/10/23-01'],
    ['2016/11/09/111147', '2016/11/09-01'],
    ['2016/11/11/015743', '2016/11/11-01'],
    ['2016/12/01/232010', '2016/12/01-01'],
    ['2016/12/05/174504', '2016/12/05-01'],
    ['2016/12/05/040715', '2016/12/05-02'],
    ['2016/12/08/122645', '2016/12/08-01'],
    ['2016/12/13/122413', '2016/12/13-01'],
    ['2016/12/14/122547', '2016/12/14-01'],
    ['2017/01/03/175940', '2017/01/03-01'],
    ['2017/01/04/040249', '2017/01/04-01'],
    ['2017/01/05/112345', '2017/01/05-01'],
    ['2017/01/08/011705', '2017/01/08-01'],
    ['2017/01/10/020824', '2017/01/10-01'],
    ['2017/01/12/120108', '2017/01/12-01'],
    ['2017/01/13/072119', '2017/01/13-01'],
    ['2017/01/17/123924', '2017/01/17-01'],
    ['2017/01/23/Terasoluna', '2017/01/23-01'],
    ['2017/01/27/10', '2017/01/27-01'],
    ['2017/01/31/000000', '2017/01/31-01'],
    ['2017/02/01/235900', '2017/02/01-01'],
    ['2017/02/03/001427', '2017/02/03-01'],
    ['2017/02/04/003512', '2017/02/04-01'],
    ['2017/02/05/113940', '2017/02/05-01'],
    ['2017/02/06/000000', '2017/02/06-01'],
    ['2017/02/07/075825', '2017/02/07-01'],
    ['2017/02/08/010947', '2017/02/08-01'],
    ['2017/02/10/093028', '2017/02/10-01'],
    ['2017/02/13/031321', '2017/02/13-01'],
    ['2017/02/16/085537', '2017/02/16-01'],
    ['2017/02/20/124512', '2017/02/20-01'],
    ['2017/02/22/103144', '2017/02/22-01'],
    ['2017/02/23/112213', '2017/02/23-01'],
    ['2017/02/27/001235', '2017/02/27-01'],
    ['2017/02/28/091054', '2017/02/28-01'],
    ['2017/03/01/080117', '2017/03/01-01'],
    ['2017/03/13/125045', '2017/03/13-01'],
    ['2017/03/19/015049', '2017/03/19-01'],
    ['2017/03/21/055523', '2017/03/21-01'],
    ['2017/03/26/232203', '2017/03/26-01'],
    ['2017/03/29/082907', '2017/03/29-01'],
    ['2017/03/30/112220', '2017/03/30-01'],
    ['2017/04/01/181356', '2017/04/01-01'],
    ['2017/04/03/012051', '2017/04/03-01'],
    ['2017/04/04/090631', '2017/04/04-01'],
    ['2017/04/05/153934', '2017/04/05-01'],
    ['2017/04/09/202136', '2017/04/09-01'],
    ['2017/04/10/091157', '2017/04/10-01'],
    ['2017/04/11/122207', '2017/04/11-01'],
    ['2017/04/13/083500', '2017/04/13-01'],
    ['2017/04/16/015254', '2017/04/16-01'],
    ['2017/04/17/124122', '2017/04/17-01'],
    ['2017/04/18/123154', '2017/04/18-01'],
    ['2017/04/19/123734', '2017/04/19-01'],
    ['2017/04/20/130000', '2017/04/20-01'],
    ['2017/04/21/130000', '2017/04/21-01'],
    ['2017/04/22/130000', '2017/04/22-01'],
    ['2017/04/23/130000', '2017/04/23-01'],
    ['2017/04/24/000000', '2017/04/24-01'],
    ['2017/04/25/000000', '2017/04/25-01'],
    ['2017/04/26/000000', '2017/04/26-01'],
    ['2017/04/27/000000', '2017/04/27-01'],
    ['2017/04/29/151621', '2017/04/29-01'],
    ['2017/05/01/174002', '2017/05/01-01'],
    ['2017/05/03/122135', '2017/05/03-01'],
    ['2017/05/14/005531', '2017/05/14-01'],
    ['2017/05/27/232113', '2017/05/27-01'],
    ['2017/06/02/120224', '2017/06/02-01'],
    ['2017/06/08/073813', '2017/06/08-01'],
    ['2017/06/26/220221', '2017/06/26-01'],
    ['2017/06/28/024502', '2017/06/28-01'],
    ['2017/07/02/122155', '2017/07/02-01'],
    ['2017/07/09/000902', '2017/07/09-01'],
    ['2017/07/14/004416', '2017/07/14-01'],
    ['2017/07/15/123000', '2017/07/15-01'],
    ['2017/07/22/111134', '2017/07/22-01'],
    ['2017/07/25/224710', '2017/07/25-01'],
    ['2017/07/26/113000', '2017/07/26-01'],
    ['2017/07/30/230206', '2017/07/30-01'],
    ['2017/08/03/233536', '2017/08/03-01'],
    ['2017/08/08/210105', '2017/08/08-01'],
    ['2017/08/10/164508', '2017/08/10-01'],
    ['2017/08/24/011548', '2017/08/24-01'],
    ['2017/08/31/130232', '2017/08/31-01'],
    ['2017/09/02/090822', '2017/09/02-01'],
    ['2017/09/04/005450', '2017/09/04-01'],
    ['2017/09/13/230234', '2017/09/13-01'],
    ['2017/09/14/120000', '2017/09/14-01'],
    ['2017/09/15/120000', '2017/09/15-01'],
    ['2017/09/16/120000', '2017/09/16-01'],
    ['2017/09/17/120000', '2017/09/17-01'],
    ['2017/09/18/120000', '2017/09/18-01'],
    ['2017/09/19/120000', '2017/09/19-01'],
    ['2017/09/20/120000', '2017/09/20-01'],
    ['2017/09/21/120000', '2017/09/21-01'],
    ['2017/09/22/120000', '2017/09/22-01'],
    ['2017/09/23/120000', '2017/09/23-01'],
    ['2017/09/24/120000', '2017/09/24-01'],
    ['2017/09/28/210211', '2017/09/28-01'],
    ['2017/09/29/120000', '2017/09/29-01'],
    ['2017/11/04/124559', '2017/11/04-01'],
    ['2017/11/22/084837', '2017/11/22-01'],
    ['2017/11/25/145050', '2017/11/25-01'],
    ['2017/11/26/204406', '2017/11/26-01'],
    ['2017/11/29/092321', '2017/11/29-01'],
    ['2017/12/08/223217', '2017/12/08-01'],
    ['2017/12/09/110000', '2017/12/09-01'],
    ['2017/12/10/110000', '2017/12/10-01'],
    ['2017/12/11/080000', '2017/12/11-01'],
    ['2017/12/12/110000', '2017/12/12-01'],
    ['2017/12/13/110000', '2017/12/13-01'],
    ['2017/12/14/110000', '2017/12/14-01'],
    ['2017/12/15/110000', '2017/12/15-01'],
    ['2017/12/20/113000', '2017/12/20-01'],
    ['2017/12/21/113000', '2017/12/21-01'],
    ['2017/12/22/113000', '2017/12/22-01'],
    ['2017/12/29/211700', '2017/12/29-01'],
    ['2017/12/31/162045', '2017/12/31-01'],
    ['2017/12/31/100000', '2017/12/31-02'],
    ['2018/01/01/100000', '2018/01/01-01'],
    ['2018/01/04/171330', '2018/01/04-01'],
    ['2018/01/06/171637', '2018/01/06-01'],
    ['2018/01/07/110000', '2018/01/07-01'],
    ['2018/01/08/110000', '2018/01/08-01'],
    ['2018/01/09/110000', '2018/01/09-01'],
    ['2018/01/10/110000', '2018/01/10-01'],
    ['2018/01/11/110000', '2018/01/11-01'],
    ['2018/01/12/110000', '2018/01/12-01'],
    ['2018/01/13/110000', '2018/01/13-01'],
    ['2018/01/14/110000', '2018/01/14-01'],
    ['2018/01/15/110000', '2018/01/15-01'],
    ['2018/01/16/110000', '2018/01/16-01'],
    ['2018/01/17/110000', '2018/01/17-01'],
    ['2018/01/18/110000', '2018/01/18-01'],
    ['2018/01/19/110000', '2018/01/19-01'],
    ['2018/01/20/110000', '2018/01/20-01'],
    ['2018/01/21/110000', '2018/01/21-01'],
    ['2018/01/22/110000', '2018/01/22-01'],
    ['2018/01/23/110000', '2018/01/23-01'],
    ['2018/01/24/110000', '2018/01/24-01'],
    ['2018/01/25/110000', '2018/01/25-01'],
    ['2018/01/26/110000', '2018/01/26-01'],
    ['2018/01/27/110000', '2018/01/27-01'],
    ['2018/01/28/110000', '2018/01/28-01'],
    ['2018/01/29/110000', '2018/01/29-01'],
    ['2018/01/30/110000', '2018/01/30-01'],
    ['2018/01/31/110000', '2018/01/31-01'],
    ['2018/02/01/110000', '2018/02/01-01'],
    ['2018/02/02/110000', '2018/02/02-01'],
    ['2018/02/03/110000', '2018/02/03-01'],
    ['2018/02/04/110000', '2018/02/04-01'],
    ['2018/02/05/110000', '2018/02/05-01'],
    ['2018/02/06/110000', '2018/02/06-01'],
    ['2018/02/07/110000', '2018/02/07-01'],
    ['2018/02/08/110000', '2018/02/08-01'],
    ['2018/02/09/110000', '2018/02/09-01'],
    ['2018/02/10/110000', '2018/02/10-01'],
    ['2018/02/11/110000', '2018/02/11-01'],
    ['2018/02/18/164830', '2018/02/18-01'],
    ['2018/03/03/223836', '2018/03/03-01'],
    ['2018/03/05/110000', '2018/03/05-01'],
    ['2018/03/06/110000', '2018/03/06-01'],
    ['2018/03/16/000000', '2018/03/16-01'],
    ['2018/03/22/223238', '2018/03/22-01'],
    ['2018/03/27/110000', '2018/03/27-01'],
    ['2018/04/02/113000', '2018/04/02-01'],
    ['2018/04/23/060333', '2018/04/23-01'],
    ['2018/04/24/110000', '2018/04/24-01'],
    ['2018/04/25/110000', '2018/04/25-01'],
    ['2018/04/28/113610', '2018/04/28-01'],
    ['2018/05/10/110000', '2018/05/10-01'],
    ['2018/05/11/110000', '2018/05/11-01'],
    ['2018/05/12/110000', '2018/05/12-01'],
    ['2018/05/15/080000', '2018/05/15-01'],
    ['2018/05/16/080000', '2018/05/16-01'],
    ['2018/05/26/161129', '2018/05/26-01'],
    ['2018/06/09/141217', '2018/06/09-01'],
    ['2018/06/17/112837', '2018/06/17-01'],
    ['2018/06/18/113000', '2018/06/18-01'],
    ['2018/06/20/113000', '2018/06/20-01'],
    ['2018/06/22/113000', '2018/06/22-01'],
    ['2018/06/30/171424', '2018/06/30-01'],
    ['2018/07/04/220236', '2018/07/04-01'],
    ['2018/07/05/110000', '2018/07/05-01'],
    ['2018/07/06/110000', '2018/07/06-01'],
    ['2018/07/09/104940', '2018/07/09-01'],
    ['2018/07/18/211955', '2018/07/18-01'],
    ['2018/07/19/220411', '2018/07/19-01'],
    ['2018/07/20/214351', '2018/07/20-01'],
    ['2018/07/20/110000', '2018/07/20-02'],
    ['2018/07/23/092211', '2018/07/23-01'],
    ['2018/08/01/235136', '2018/08/01-01'],
    ['2018/08/02/113000', '2018/08/02-01'],
    ['2018/08/03/113000', '2018/08/03-01'],
    ['2018/08/06/110000', '2018/08/06-01'],
    ['2018/08/07/110000', '2018/08/07-01'],
    ['2018/08/08/110000', '2018/08/08-01'],
    ['2018/08/09/113000', '2018/08/09-01'],
    ['2018/08/14/220730', '2018/08/14-01'],
    ['2018/08/15/110000', '2018/08/15-01'],
    ['2018/09/02/151426', '2018/09/02-01'],
    ['2018/09/03/110000', '2018/09/03-01'],
    ['2018/09/04/113000', '2018/09/04-01'],
    ['2018/09/14/192902', '2018/09/14-01'],
    ['2018/09/15/110000', '2018/09/15-01'],
    ['2018/09/24/174153', '2018/09/24-01'],
    ['2018/09/27/223339', '2018/09/27-01'],
    ['2018/09/28/113000', '2018/09/28-01'],
    ['2018/10/08/132954', '2018/10/08-01'],
    ['2018/10/09/113000', '2018/10/09-01'],
    ['2018/10/15/160229', '2018/10/15-01'],
    ['2018/10/16/215520', '2018/10/16-01'],
    ['2018/10/17/120000', '2018/10/17-01'],
    ['2018/10/18/120000', '2018/10/18-01'],
    ['2018/10/19/120000', '2018/10/19-01'],
    ['2018/11/24/193639', '2018/11/24-01'],
    ['2018/11/25/110000', '2018/11/25-01'],
    ['2018/12/10/112349', '2018/12/10-01'],
    ['2018/12/11/000000', '2018/12/11-01'],
    ['2018/12/12/113000', '2018/12/12-01'],
    ['2018/12/17/161010', '2018/12/17-01'],
    ['2018/12/24/214814', '2018/12/24-01'],
    ['2018/12/25/110000', '2018/12/25-01'],
    ['2018/12/28/110000', '2018/12/28-01'],
    ['2019/01/07/100000', '2019/01/07-01'],
    ['2019/01/14/110000', '2019/01/14-01'],
    ['2019/01/22/110000', '2019/01/22-01'],
    ['2019/01/24/110000', '2019/01/24-01'],
    ['2019/01/26/110000', '2019/01/26-01'],
    ['2019/01/28/110000', '2019/01/28-01'],
    ['2019/01/30/110000', '2019/01/30-01'],
    ['2019/02/11/110000', '2019/02/11-01'],
    ['2019/03/04/223255', '2019/03/04-01'],
    ['2019/03/06/110000', '2019/03/06-01'],
    ['2019/03/08/110000', '2019/03/08-01'],
    ['2019/03/18/003029', '2019/03/18-01'],
    ['2019/04/02/003445', '2019/04/02-01'],
    ['2019/04/07/161724', '2019/04/07-01'],
    ['2019/04/08/113000', '2019/04/08-01'],
    ['2019/04/11/215611', '2019/04/11-01'],
    ['2019/04/13/093000', '2019/04/13-01'],
    ['2019/04/16/110000', '2019/04/16-01'],
    ['2019/04/28/140049', '2019/04/28-01'],
    ['2019/05/10/180045', '2019/05/10-01'],
    ['2019/05/15/152350', '2019/05/15-01'],
    ['2019/06/03/214501', '2019/06/03-01'],
    ['2019/06/10/215748', '2019/06/10-01'],
    ['2019/07/05/214456', '2019/07/05-01'],
    ['2019/07/06/113000', '2019/07/06-01'],
    ['2019/07/07/113000', '2019/07/07-01'],
    ['2019/08/06/103907', '2019/08/06-01'],
    ['2019/08/07/110000', '2019/08/07-01'],
    ['2019/08/29/203517', '2019/08/29-01'],
    ['2019/09/04/013000', '2019/09/04-01'],
    ['2019/09/07/080000', '2019/09/07-01'],
    ['2019/09/08/173750', '2019/09/08-01'],
    ['2019/09/09/010738', '2019/09/09-01'],
    ['2019/09/16/230412', '2019/09/16-01'],
    ['2019/09/23/190343', '2019/09/23-01'],
    ['2019/10/05/153110', '2019/10/05-01'],
    ['2019/10/07/113000', '2019/10/07-01'],
    ['2019/10/08/113000', '2019/10/08-01'],
    ['2019/10/16/223833', '2019/10/16-01'],
    ['2019/10/27/110000', '2019/10/27-01'],
    ['2019/11/12/132855', '2019/11/12-01'],
    ['2019/11/13/110000', '2019/11/13-01'],
    ['2019/11/14/110000', '2019/11/14-01'],
    ['2019/11/24/001401', '2019/11/24-01'],
    ['2019/12/16/214844', '2019/12/16-01'],
    ['2020/01/01/221301', '2020/01/01-01'],
    ['2020/01/02/234424', '2020/01/02-01'],
    ['2020/01/11/231740', '2020/01/11-01'],
    ['2020/01/19/235917', '2020/01/19-01'],
    ['2020/01/25/223551', '2020/01/25-01'],
    ['2020/01/27/001248', '2020/01/27-01'],
    ['2020/01/28/113000', '2020/01/28-01'],
    ['2020/01/29/113000', '2020/01/29-01'],
    ['2020/01/30/113000', '2020/01/30-01'],
    ['2020/01/31/113000', '2020/01/31-01'],
    ['2020/02/01/113000', '2020/02/01-01'],
    ['2020/02/02/211742', '2020/02/02-01'],
    ['2020/02/04/002121', '2020/02/04-01'],
    ['2020/02/05/110000', '2020/02/05-01'],
    ['2020/02/06/113000', '2020/02/06-01'],
    ['2020/02/10/104539', '2020/02/10-01'],
    ['2020/02/17/141454', '2020/02/17-01'],
    ['2020/02/20/140325', '2020/02/20-01'],
    ['2020/02/21/113000', '2020/02/21-01'],
    ['2020/02/22/165234', '2020/02/22-01'],
    ['2020/02/24/004840', '2020/02/24-01'],
    ['2020/03/01/223635', '2020/03/01-01'],
    ['2020/03/08/233038', '2020/03/08-01'],
    ['2020/03/16/005224', '2020/03/16-01'],
    ['2020/03/23/001704', '2020/03/23-01'],
    ['2020/03/30/012522', '2020/03/30-01'],
    ['2020/04/02/224737', '2020/04/02-01'],
    ['2020/04/06/223133', '2020/04/06-01'],
    ['2020/04/08/003428', '2020/04/08-01'],
    ['2020/04/13/164209', '2020/04/13-01'],
    ['2020/04/19/172950', '2020/04/19-01'],
    ['2020/04/20/225516', '2020/04/20-01'],
    ['2020/04/21/113000', '2020/04/21-01'],
    ['2020/04/22/113000', '2020/04/22-01'],
    ['2020/04/29/103533', '2020/04/29-01'],
    ['2020/04/30/110000', '2020/04/30-01'],
    ['2020/05/03/205143', '2020/05/03-01'],
    ['2020/05/03/112128', '2020/05/03-02'],
    ['2020/05/08/110000', '2020/05/08-01'],
    ['2020/05/11/235825', '2020/05/11-01'],
    ['2020/05/17/141344', '2020/05/17-01'],
    ['2020/05/22/004356', '2020/05/22-01'],
    ['2020/05/25/223418', '2020/05/25-01'],
    ['2020/05/31/144031', '2020/05/31-01'],
    ['2020/06/07/164729', '2020/06/07-01'],
    ['2020/06/14/161259', '2020/06/14-01'],
    ['2020/06/23/161724', '2020/06/23-01'],
    ['2020/06/28/181907', '2020/06/28-01'],
    ['2020/07/05/143135', '2020/07/05-01'],
    ['2020/07/12/115132', '2020/07/12-01'],
    ['2020/07/16/175000', '2020/07/16-01'],
    ['2020/07/17/113000', '2020/07/17-01'],
    ['2020/07/18/213608', '2020/07/18-01'],
    ['2020/07/25/135842', '2020/07/25-01'],
    ['2020/07/26/163717', '2020/07/26-01'],
    ['2020/08/02/181744', '2020/08/02-01'],
    ['2020/08/03/181745', '2020/08/03-01'],
    ['2020/08/04/113000', '2020/08/04-01'],
    ['2020/08/10/194848', '2020/08/10-01'],
    ['2020/08/15/222205', '2020/08/15-01'],
    ['2020/08/17/173109', '2020/08/17-01'],
    ['2020/08/18/113000', '2020/08/18-01'],
    ['2020/08/28/175049', '2020/08/28-01'],
    ['2020/08/29/181718', '2020/08/29-01'],
    ['2020/09/06/152509', '2020/09/06-01'],
    ['2020/09/12/125338', '2020/09/12-01'],
    ['2020/09/17/221554', '2020/09/17-01'],
    ['2020/09/19/220252', '2020/09/19-01'],
    ['2020/09/20/080000', '2020/09/20-01'],
    ['2020/09/27/003059', '2020/09/27-01'],
    ['2020/09/28/000000', '2020/09/28-01'],
    ['2020/09/29/000000', '2020/09/29-01'],
    ['2020/09/30/000000', '2020/09/30-01'],
    ['2020/10/01/113000', '2020/10/01-01'],
    ['2020/10/02/225927', '2020/10/02-01'],
    ['2020/10/02/113000', '2020/10/02-02'],
    ['2020/10/03/113000', '2020/10/03-01'],
    ['2020/10/04/221807', '2020/10/04-01'],
    ['2020/10/10/235814', '2020/10/10-01'],
    ['2020/10/17/220342', '2020/10/17-01'],
    ['2020/10/23/234509', '2020/10/23-01'],
    ['2020/10/25/164647', '2020/10/25-01'],
    ['2020/10/25/110000', '2020/10/25-02'],
    ['2020/10/26/110000', '2020/10/26-01'],
    ['2020/10/27/110000', '2020/10/27-01'],
    ['2020/10/28/110000', '2020/10/28-01'],
    ['2020/11/01/135459', '2020/11/01-01']
  ];
  
  const links = document.querySelectorAll('h1.entry-title > a.entry-title-link');
  console.log('Murga : Links : ', links.length);
  links.forEach(link => {
    try {
      const pair = pairs.find(pair => link.href.includes(pair[0]));
      if(!pair) return console.log('Murga : Pairs Not Found', link.href);
      
      const body = link.parentElement.parentElement.parentElement.querySelectorAll('.entry-content, .archive-entry-body');
      if(!body || !body.length) return console.log('Murga : Target Not Found', link.href);
      
      const url = `https://neos21.net/blog/${pair[1]}.html`;
      body[0].insertAdjacentHTML('afterbegin', `<div style="margin: var(--nn-space-default) 0; padding: var(--nn-space-default); border: 1px solid #fc0; background: #ffffe0;">この記事は以下の URL に移転しました：<br><a href="${url}">${url}</a></div>`);
      console.log('Murga : Inserted', link.href);
    }
    catch(error) {
      console.warn('Murga : Exec : Error', error, link);
    }
  });
};
if(!document.readyState || document.readyState === 'interactive') {
  console.log('Murga : Interactive (onload)');
  window.addEventListener('load', exec);
}
else if(document.readyState === 'loading') {
  console.log('Murga : Loading (DOMContentLoaded)');
  document.addEventListener('DOMContentLoaded', exec);
}
else {
  console.log('Murga : Immediately');
  exec();
}
console.log('Murga : Loaded');
