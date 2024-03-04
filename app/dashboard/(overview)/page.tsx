import { lusitana } from '@/app/ui/fonts';
import CardWrapper, { Card } from '../../ui/dashboard/cards';
import { fetchCardData, fetchLatestInvoices } from '../../lib/data';
import RevenueChart from '../../ui/dashboard/revenue-chart';
import LatestInvoices from '../../ui/dashboard/latest-invoices';
import { CardSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

const Page = async() => {

    return( <main>
        <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
         <Suspense fallback={<CardSkeleton />}>
          <CardWrapper />
         </Suspense>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
          <Suspense fallback={<RevenueChartSkeleton/>}>
          <RevenueChart  />
          </Suspense>

          <Suspense fallback={<RevenueChartSkeleton />}>
          <LatestInvoices />
          </Suspense>
         
          
        </div>
      </main>)
}

export default Page;