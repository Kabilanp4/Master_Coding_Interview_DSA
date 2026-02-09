class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        n = len(nums)
        left_sum =[]
        left_start = 0
        for num in nums:
            left_sum.append(left_start+num)
            left_start+=num
        total = left_sum[-1]
        right =0
        for j in range(len(left_sum)):
            left = left_sum[j-1] if j > 0 else 0
            right = total - left_sum[j]
            if left == right:
                return j
        return -1

